const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    phone:String,
    age:Number,
    email:{
        type:String,
        required:true
    },
    address:{
        type:String
    }
})

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;