import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import dbConnect from '../../../server/utils/dbConnect';
const Router =express.Router()
import UserModel from '../../../server/models/UserModel';
import Website from '../../../server/models/website';
import Page from "../../../server/models/page"
import { ComparePassword,HashPassWord } from '../../../server/utils/hashPassword';
import jwt from 'jsonwebtoken';



const app = express();

const SignInRouter=require("../../../server/router/signin")

dbConnect();


const sessionMiddleware = session({
  secret: 'your_secret_key', 
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb+srv://chandran:rraavvii@cluster0.0zcd2.mongodb.net/Builder?retryWrites=true&w=majority' }),
  cookie: {
    maxAge: 3600000, 
    secure: false,
    httpOnly: true,
    path: '/',
  },
});

app.use(sessionMiddleware);


app.use(async(req,res,next)=>{
  console.log(req.body)
    const {action}=req.body.data
    if(action==="signin"){
        try {
            const { email, password } = req.body.data;
            await dbConnect()
            const user = await UserModel.findOne({ email });
            console.log(user)
            if (!user) { 
              return res.status(401).json({ error: 'Invalid email or password' });
            }
            console.log(req.session)
            req.session.user = {
              id: user._id,
              email: user.email,
              name:user.username
            };
            console.log(req.session,"session")
            const passwordMatches = await ComparePassword(password, user.password);
        
            if (!passwordMatches) {
              
              return res.status(401).json({ error: 'Invalid email or password' });
            }
            const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' })
            return res.status(200).json({ message: 'Login successful',token:token, user: { username: user.username, email: user.email ,session:req.session.user} });
          } catch (error) {
            console.error('Error occurred during login:', error);
            return res.status(500).json({ error: 'An error occurred during login' });
          }
    }else if(action==="register"){
        try {
            const { username, email, password } = req.body.data;
            await  dbConnect()
            console.log("req.body", username, email, password, "body details");
            const existingUser = await UserModel.findOne({ $or: [{ username }, { email }] });
        
            if (existingUser) {
              return res.status(400).json({ error: "Username or email already exists" });
            }
    
            const hashPassword = await HashPassWord(password);
            const newUser = new UserModel({ username, email, password: hashPassword });
            req.session.user = {
              id: newUser._id,
              email: email,
            };
            const token = jwt.sign({ userId: newUser._id }, 'your-secret-key', { expiresIn: '1h' })
            await newUser.save();
            res.status(200).json({ username, email, password: hashPassword });
         
        } catch (error) {
            console.error("Error occurred during registration:", error);
            res.status(500).json({ error: "An error occurred during registration" });
        }
    }else if(action==="auth"){
        if(!req.session.user){
            res.send({auth:false})
        }else if(req.session.user){
            res.send({auth:true})
        }
   }else if(action==="session"){
    res.status(200).json({user:req.session.user})
   }else if (action === "logout") {
   if (req.session) {
     req.session.destroy((err) => {
       if (err) {
         console.error("Error occurred during session destruction:", err);
         res.status(500).json({ error: "An error occurred during logout" });
       } else {
         req.session = null;
         res.status(200).json({ message: "Logout successful" });
       }
    });
  } else {
    res.status(400).json({ error: "No active session to logout" });
  }
  }else if(action==="newweb"){
    const {type}=req.query
    console.log(req.query,type,req.session.user)
    const{name,slug,id,owner}=req.body.data
    if(type==="new"){
      console.log(name)
     const newWebsite=new Website({name:name,domain:slug,owner:req.session.user.id})
      await newWebsite.save()
      res.status(200).json({message:"Successfully received"})
   } 
  }else if(action==="getweb"){
    const {ownerId}=req.body.data
    try {
      const websites = await Website.find({ owner: ownerId })
      console.log(websites,"websites")
      res.send({websites})
    } catch (error) {
      console.error('Error while finding website names by owner:', error);
      throw error;
    }
  } else if (action === "editweb") {
    const { id, name, slug } = req.body.data;
    try {
      const website = await Website.findOneAndUpdate(
        { _id: id, owner: req.session.user.id },
        { name, domain: slug },
        { new: true }
      );
      if (!website) {
        return res.status(404).json({ error: "Website not found or unauthorized" });
      }
      res.status(200).json({ message: "Website updated successfully" });
    } catch (error) {
      console.error("Error occurred during website update:", error);
      res.status(500).json({ error: "An error occurred during website update" });
    }
  } else if (action === "deleteweb"){
    const { id } = req.body.data;
    try {
      const deletedWebsite = await Website.findOneAndDelete({
        _id: id,
        owner: req.session.user.id,
      });
      if (!deletedWebsite) {
        return res.status(404).json({ error: "Website not found or unauthorized" });
      }
      res.status(200).json({ message: "Website deleted successfully" });
    } catch (error) {
      console.error("Error occurred during website deletion:", error);
      res.status(500).json({ error: "An error occurred during website deletion" });
    }
  }else if(action==="createpage"){
    try {
      const { name, slug,meta, websiteId } = req.body.data;
      
      // Create a new page using the Page model
      const newPage = new Page({ name, slug, website: websiteId ,meta});
      await newPage.save();
      
      res.status(200).json({ message: 'Page created successfully', page: newPage });
    } catch (error) {
      console.error('Error occurred during page creation:', error);
      res.status(500).json({ error: 'An error occurred during page creation' });
    }
  }else if(action==="getpages"){
      try {
        const { websiteId } = req.body.data;
    
        // Find all pages that belong to the specified website
        const pages = await Page.find({ website: websiteId });
    
        res.status(200).json({ pages });
      } catch (error) {
        console.error('Error occurred while fetching pages:', error);
        res.status(500).json({ error: 'An error occurred while fetching pages' });
      }
  }else if(action==="updatepage"){
    try {
      const { id } = req.body.data;
      const { name, meta,slug } = req.body.data;
      
      // Find and update the page by ID
      const updatedPage = await Page.findByIdAndUpdate(
        id,
        { name, meta ,slug},
        { new: true }
      );
      
      if (!updatedPage) {
        return res.status(404).json({ error: 'Page not found' });
      }
      
      res.status(200).json({ message: 'Page updated successfully', page: updatedPage });
    } catch (error) {
      console.error('Error occurred during page update:', error);
      res.status(500).json({ error: 'An error occurred during page update' });
    }
  }else if(action==="deletepage"){
      try {
        const { id } = req.body.data;
        
        // Find and delete the page by ID
        const deletedPage = await Page.findByIdAndDelete(id);
        
        if (!deletedPage) {
          return res.status(404).json({ error: 'Page not found' });
        }
        
        res.status(200).json({ message: 'Page deleted successfully' });
      } catch (error) {
        console.error('Error occurred during page deletion:', error);
        res.status(500).json({ error: 'An error occurred during page deletion' });
      }
  }
  
  

})



export default app;
