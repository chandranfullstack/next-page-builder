const express=require("express")
const app =express()
const port =3001
const fs=require("fs")
const path =require("path")
const bodyParser=require("body-parser")
const cors=require("cors")

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(bodyParser.raw({ type: ["image/jpeg", "image/png"], limit: "5mb" }))
app.use(cors({origin:"https://next-page-builder.netlify.app",credentials:true}))
app.get("/",(req,res)=>{
    const fileName=req.query.path+".json"
    console.log(fileName,"fileName")
    fs.writeFileSync(path.join(fileName),JSON.stringify("Hello World",null))
    res.send("Hello world")
})

app.post("/data",(bodyParser.raw({ type: ["image/jpeg", "image/png"], limit: "5mb" })),(req,res)=>{
    const path=req.query.path
    console.log(path,"path",req.body)
    fs.writeFileSync("image.png",req.body)
    res.end(path)
})

app.get("/img",async(req,res)=>{
    const img= fs.readFileSync("image.png")
    const url="/image.png"
    fs.readFile('image.png', function (err, content) {
        if (err) {
            res.writeHead(400, {'Content-type':'text/html'})
            console.log(err);
            res.end("No such image");    
        } else {
            //specify the content type in the response will be an image
            res.writeHead(200,{'Content-type':'image/jpg'});
            res.end(content);
        }
    });
})


app.listen(port,console.log(`the port is running on port ${port}`))