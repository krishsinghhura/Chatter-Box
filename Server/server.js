import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Adjust for your frontend URL
    methods: ["GET", "POST"],
  },
});

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";
const API_KEY = process.env.GEMINI_API_KEY; // ✅ Store your API key in .env

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("chatMessage", async (msg) => {
    console.log("User Message:", msg);

    try {
      const response = await axios.post(`${GEMINI_API_URL}?key=${API_KEY}`, {
        contents: [{ parts: [{ text: msg.text }] }], // ✅ Correct payload
      });

      const botReply =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm sorry, I couldn't process that.";

      // Send Gemini's response to the frontend
      socket.emit("chatMessage", { id: "bot", text: botReply });
    } catch (error) {
      console.error("Error fetching from Gemini:", error);
      socket.emit("chatMessage", {
        id: "bot",
        text: "Error: Unable to reach AI",
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
