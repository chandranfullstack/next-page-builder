import mongoose from "mongoose";
const UserModel=require("../models/UserModel")
import { HashPassWord } from "../utils/hashPassword";
import dbConnect from "../utils/dbConnect";


const  Register=async(req,res)=>{
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
    }}
export default Register