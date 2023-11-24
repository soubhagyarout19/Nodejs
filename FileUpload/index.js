const express = require("express");
const app = express();
const multer = require("multer");
const path = require('path');

const PORT = 7777;
const hostName = "127.0.0.7";

app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "image");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname)
  }
});

const upload = multer({ storage: storage });


app.get("/",(req, res)=>{
  res.sendFile(path.join(__dirname,"index.html"));
})

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.body);
  res.send("Image Uploaded");
});

app.listen(7777, hostName, () => {
  console.log(`Server started at http://${hostName}:${PORT}`);
});
