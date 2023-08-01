import { HashPassWord,ComparePassword } from "../../../server/utils/hashPassword";
import mongoose from "mongoose";
const UserModel=require("../../../server/models/UserModel")

mongoose.connect("mongodb+srv://chandran:rraavvii@cluster0.0zcd2.mongodb.net/Builder?retryWrites=true&w=majority")
const  SignIn=async(req,res)=>{
    //   console.log("called")
    //   const {email,password}=req.body.data
    //   console.log(email,password,req.body)
    // //   res.send("successfully receiveid")
    // const unHashPassWord=await HashPassWord(password)
    // console.log(unHashPassWord,"unHashPassword")
    // const findUser=UserModel.findById()
    // console.log(findUser,"find user")
    // if(findUser){
    // res.status(200).json({ message: 'Authentication successful'});
    // }else{
    // res.status(400).json({error:" register as new user"})
    // }
    try {
        const { email, password } = req.body.data;
        const user = await UserModel.findOne({ email });
        console.log(user)
        if (!user) { 
          return res.status(401).json({ error: 'Invalid email or password' });
        }
    
        // Compare the provided password with the hashed password stored in the database
        const passwordMatches = await ComparePassword(password, user.password);
    
        if (!passwordMatches) {
          // If the passwords don't match, respond with an error
          return res.status(401).json({ error: 'Invalid email or password' });
        }
    
        // Passwords match, user is authenticated, proceed with further actions
        // For example, set a session or JWT token to maintain authentication
    
        // Respond with a success message or user data if needed
        return res.status(200).json({ message: 'Login successful', user: { username: user.username, email: user.email } });
      } catch (error) {
        console.error('Error occurred during login:', error);
        return res.status(500).json({ error: 'An error occurred during login' });
      }
    
}
export default SignIn