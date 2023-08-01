import mongoose from "mongoose";
const UserModel=require("../../models/UserModel")
import { HashPassWord } from "../../../server/utils/hashPassword";

mongoose.connect("mongodb+srv://chandran:rraavvii@cluster0.0zcd2.mongodb.net/Builder?retryWrites=true&w=majority").then(console.log("connected successuflly"))

const  Register=async(req,res)=>{
    try {
        const { username, email, password } = req.body.data;
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
    //const {username,email,password}=req.body.data
    //console.log("req.body",username,email,password,"body details")
    //const hashPassword=await HashPassWord(password)
    //console.log(hashPassword,"hashPassowrd")
    //const registerNewUser=new UserModel({username:username,email:email,password:hashPassword})
    //await registerNewUser.save()
    //res.status(200).json({username:username,email:email,password:hashPassword})
}
export default Register