const http = require("http");
const fs = require("fs");

let app = http.createServer((req,res)=>{
    // res.write("<h1>Welcome...</h1>");
    // res.end();
    let{method,url} = req;
    if(method == "GET"){
        console.log(url);
        if(url === "/"){
            let data = fs.readFileSync("./public/home.html", "utf-8");
            res.write(data);
            res.end();
        }
        if(url === "/homecss"){
            let data = fs.readFileSync("./public/css/home.css","utf-8");
            res.write(data);
            res.end();
        }
        if(url == "/about"){
            let data = fs.readFileSync("./public/pages/About.html", "utf-8");
            res.write(data);
            res.end();
        }
        if(url === "/aboutcss"){
            let data = fs.readFileSync("./public/css/About.css","utf-8");
            res.write(data);
            res.end();
        }
        if(url == "/login"){
            let data = fs.readFileSync("./public/pages/Login.html", "utf-8");
            res.write(data);
            res.end();
        }
        if(url == "/logincss"){
            let data = fs.readFileSync("./public/css/Login.css", "utf-8");
            res.write(data);
            res.end();
        }
    }
})

app.listen(7777, ()=>{
    console.log("server 7777 is now live....");
})