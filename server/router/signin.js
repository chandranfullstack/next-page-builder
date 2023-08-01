import { ComparePassword } from "../utils/hashPassword";
const UserModel=require("../models/UserModel")
import dbConnect from "../utils/dbConnect";
import middleware from "../../pages/api/auth/middleware"
import  Express  from "express";
const Router=Express.Router()

// mongoose.connect("mongodb+srv://chandran:rraavvii@cluster0.0zcd2.mongodb.net/Builder?retryWrites=true&w=majority")
Router.post("/signin",async(req,res)=>{ 
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
    
})
