const mongoose=require("mongoose");

const userModel=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        minlength:4,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        minlength:6,
        required:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model("user",userModel);