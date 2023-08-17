const express=require("express")
const router=express.Router()


router.post("/",async(req,res)=>{
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
})