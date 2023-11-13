const http = require("http");
const fs = require("fs");
const { log } = require("console");

let app = http.createServer((req,res)=>{
    // res.write("<h1>Welcome...</h1>");
    // res.end();
    let{method,url} = req;
    if(method == "GET"){
        console.log(url);
        if(url === "/"){
            let data = fs.readFileSync("./public/home.html", "utf-8");
            res.writeHead(200,{"content-type":"text/html", "msg":"This is a high security webpage"})
            res.write(data);
            res.end();
        }
        if(url === "/homecss"){
            let data = fs.readFileSync("./public/css/home.css","utf-8");
            res.writeHead(200,{"content-type":"text/css"})
            res.write(data);
            res.end();
        }
        if(url == "/about"){
            let data = fs.readFileSync("./public/pages/About.html", "utf-8");
            res.writeHead(200,{"content-type":"text/html"})
            res.write(data);
            res.end();
        }
        if(url === "/aboutcss"){
            let data = fs.readFileSync("./public/css/About.css","utf-8");
            res.writeHead(200,{"content-type":"text/css"})
            res.write(data);
            res.end();
        }
        if(url == "/login"){
            let data = fs.readFileSync("./public/pages/Login.html", "utf-8");
            res.writeHead(200,{"content-type":"text/html"})
            res.write(data);
            res.end();
        }
        if(url == "/logincss"){
            let data = fs.readFileSync("./public/css/Login.css", "utf-8");
            res.writeHead(200,{"content-type":"text/css"})
            res.write(data);
            res.end();
        }
    }
    else if(method == "POST"){
        if(url == "/newuser"){
            console.log("hello");
            req.on("data",(data)=>{
                console.log(data.toString());
                let newuser = JSON.parse(data.toString());
                let users =JSON.parse(fs.readFileSync("./Users.json","utf-8"));
                users.push(newuser);
                fs.writeFileSync("./Users.json",JSON.stringify(users));
            })
            res.writeHead(201,{"Content-type": "application/json"})
                res.write(JSON.stringify({"MSG":"Data Received"}))
                res.end()
            res.end();
        }
    }
})

app.listen(7777, ()=>{
    console.log("server 7777 is now live....");
})