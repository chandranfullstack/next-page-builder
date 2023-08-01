import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import dbConnect from '../../../server/utils/dbConnect';
const Router =express.Router()
import UserModel from '../../../server/models/UserModel';
import { ComparePassword,HashPassWord } from '../../../server/utils/hashPassword';


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
            };
            console.log(req.session,"session")
            const passwordMatches = await ComparePassword(password, user.password);
        
            if (!passwordMatches) {
              
              return res.status(401).json({ error: 'Invalid email or password' });
            }
        
            return res.status(200).json({ message: 'Login successful', user: { username: user.username, email: user.email ,session:req.session.user} });
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
            await newUser.save();
            res.status(200).json({ username, email, password: hashPassword });
         
        } catch (error) {
            console.error("Error occurred during registration:", error);
            res.status(500).json({ error: "An error occurred during registration" });
        }
    }else if(action==="auth"){
        if(!req.session.user){
            res.redirect("/auth/login")
        }else if(req.session.user){
            res.send({auth:"true"})
        }
    }
})



export default app;
