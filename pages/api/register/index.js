const express=require("express")
const router=express.Router()
const HashPassWord=require("../../../server/utils/hashPassword")
const UserModel=require("../../../server/models/UserModel")
const jwt=require("jsonwebtoken")



router.post("/",async(req,res)=>{
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
})
module.exports=router