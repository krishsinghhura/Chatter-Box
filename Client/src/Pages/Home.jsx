import React, { useEffect } from "react";
import ChatRoom from "../components/chatRoom";
import { io } from "socket.io-client";
import { nanoid } from "nanoid";

const Home = () => {
  return <ChatRoom />;
};

export default Home;
