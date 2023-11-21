const express = require("express");
const app = express();
const dbConnect = require("./db");
const userModel = require("./userModel");

const PORT = 7777;
const hostName = "127.0.0.7";

app.use(express.json());

app.get("/users", async (req, res) => {
  let data = await userModel.find();
  res.send(data);
});

app.post("/newuser", async (req, res) => {
  console.log(req.body);
  let data = new userModel(req.body);
  await data.save();
  res.send("Data Received");
});

app.delete("/delete", async (req, res) => {
  console.log(req.body);
  let result = await userModel.deleteOne(req.body);
  console.log(result);
  res.send("User Deleted");
});

app.put("/update", async (req, res) => {
  console.log(req.body);
  let { name, age } = req.body;
  let result = await userModel.updateOne(
    { name: name },
    { $set: { age: age } }
  );
  console.log(result);
  res.send("User Updated");
});

// app.get("/search", async (req,res)=>{
//   // console.log(req.query);
//   let data = await userModel.find({
//     $or: [
//       {name:{$regex: req.query.name}}
//     ]
//   })
//   res.send(data)
// })

app.get("/search/:name", async (req,res)=>{
    // console.log(req.params);
    let data = await userModel.find({
      $or:[
        {name: {$regex: req.params.name}}
      ]
    })
    res.send(data);
  })

app.listen(7777, hostName, () => {
  dbConnect();
  console.log(`Server started at http://${hostName}:${PORT}`);
});
