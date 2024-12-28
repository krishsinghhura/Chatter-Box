const mongoose=require("mongoose");

const userModel=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        minlength:4,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        minlength:6,
    }
})

module.exports=mongoose.model("user",userModel);