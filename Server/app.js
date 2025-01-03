const express = require("express");
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");
const chatRoutes = require("./Routes/chatRoutes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173/login", // Your frontend URL
    credentials: true, // Allow credentials (cookies)
  })
);

app.use("/", userRoutes);

app.use("/api/chats", chatRoutes);

module.exports = app;
