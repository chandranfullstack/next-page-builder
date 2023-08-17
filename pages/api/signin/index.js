const express=require("express")
const router=express.Router()
import UserModel from "../../../server/models/UserModel";
import { ComparePassword } from "../../../server/utils/hashPassword";
const jwt=require("jsonwebtoken")
const dbConnect=require("../../../server/utils/dbConnect")
const app=express()

app.post("/",async(req,res)=>{
    console.log("the sign in api called the ")
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
})

module.exports=app
