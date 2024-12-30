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
    },
    pic:{
        type:String,
        required:true,
        default:"https://imgs.search.brave.com/UqIPtFQTN21z71iv43mJL78qBF20hlF1ovB4k3qLq5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzE5LzI2LzQ2/LzM2MF9GXzYxOTI2/NDY4MF94MlBCZEdM/RjU0c0ZlN2tUQnRB/dlpuUHlYZ3ZhUncw/WS5qcGc"
    }
},{
    timestamps:true
})

module.exports=mongoose.model("user",userModel);