//chatname
//isGroupChat
//users
//latest Message
//groupAdmin

const mongoose=require("mongoose");

const chatModel=mongoose.Schema({
    chatName:{
        type:String,
        trim:true
    },
    groupChat:{
        type:Boolean,
        default:false
    },
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"message"
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},
{
    timestamps:true
})

module.exports=mongoose.model("chat",chatModel)