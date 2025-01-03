const chatModel = require("../models/chatModel");

const accessChat = async (req, res) => {
  //in this function the user will return userId and then we will check if a chat already exists then we will open that otherwise we will create a new one
  //like if the user clicks a chat from the contact list then ofc it will give a userid and then this will check if the chat exists and if it does the fetch that chat model then render and if it doesnt the create a chatModel and render

  const userId = req.body.users;
  console.log("Request Body:", req.user);
  if (!userId) {
    console.log("User doesn't exists");
    return res.sendStatus(400);
  } // if that user doesnt exists

  //for existing chat
  const isChat = await chatModel.find({
    groupChat: false,
    users: { $all: [userId, req.user._id] }, //this checks that chatModel.users has the userId(which is provided my the req.body) and the current user (which we get from the req.userid)
  }); //finding the chat with that userid in chatModel
  //now suppose we found that user then we need the data for the user then we need to get the data of that user like his name and all thats why we will use populate (users array will be storing the objects)
  // .populate("users");

  if (isChat.length > 0) {
    //if that chat already exists
    res.send(isChat[0]);
  } else {
    // else creating a new chat

    //for new chat
    const newChat = await chatModel.create({
      chatName: "sender",
      groupChat: false,
      users: [userId, req.user._id],
    });

    const fullChat = await chatModel
      .findOne({ _id: newChat._id })
      .populate("users");
    res.status(200).send(fullChat);
  }
};

module.exports = {
  accessChat,
};
