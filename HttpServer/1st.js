const http = require("http");

const app = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    // res.write("<h1>Jai Shree Ram</h1>");
    // res.end();
    if(req.method == "GET"){
        if(req.url == "/"){
            res.write("<h1>Welcome</h1>");
            res.end();
        }
        else if(req.url == "/about"){
            res.write("<h1>Welcome to about Page</h1>");
            res.end();
        }
        else if(req.url == "/contact"){
            res.write("<h1>Welcome to contact Page</h1>");
            res.end();
        }
        else{
            res.write("<h1>404 Not Found....</h1>")
            res.end();
        }
    }
});

app.listen(5555, ()=>{
    console.log("Server Started");
})