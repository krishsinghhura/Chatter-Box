const mongoose=require("mongoose");
require("dotenv").config();

const dbConnect=async ()=>{
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Connected to DB");
}

module.exports={
    dbConnect
}