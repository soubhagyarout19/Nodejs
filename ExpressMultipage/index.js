const express = require("express");
const { readFileSync, writeFileSync } = require("fs");
const app = express();``

PORT = 7777;
const hostName = "127.0.0.7"
const { join } = require("path");

//For reading all static files // middleware
app.use(express.json())
app.use(express.static(join(__dirname, "public")));

app.get("/",(req,res)=>{
    // res.sendFile(`${__dirname}/public/index.html`)
    res.sendFile(join(__dirname, "public", "index.html"))
});

app.post("/student",(req,res)=>{
    let studentReviews = JSON.parse(readFileSync("./Db.json","utf-8"));
    console.log(req.body);
    let { review } = req.body;
    let char = review.length;
    let words = review.split(" ").length;
    studentReviews.push(req.body);
    writeFileSync("./Db.json", JSON.stringify(studentReviews))
    res.send({char,words});
})

app.listen(7777,hostName, ()=>{
    console.log(`Server started at http://${hostName}:${PORT}`);
})