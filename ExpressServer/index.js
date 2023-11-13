const express = require("express");

const app = express();

const PORT = 7777
const hostName = "127.0.0.7"

//middleware
app.use(express.json())

//get
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home Page</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>This is About Page</h1>")
})


//post
app.post("/user",(req,res)=>{
    console.log(req.body);
    res.send("HEY");
})

app.listen(PORT,hostName,()=>{
    console.log(`Server started at http://${hostName}:${PORT}`);
})
