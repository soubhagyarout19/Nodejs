const mongoose = require('mongoose');

async function dbConnect(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Soubhagya")
        console.log("Database Connected");
    }
    catch(err){
        console.log("Something went wrong",err);
    }
}

module.exports = dbConnect;
