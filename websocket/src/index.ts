import { WebSocketServer } from "ws";

const port = process.env.PORT || 8000;
const wss = new WebSocketServer({ port: Number(port) });

console.log("websocket server running on ws://localhost:" + port);
wss.on("connection", (socket) => {
  console.log("user connected");

  socket.on("message", (message) => {
    if (message.toString() === "ping") {
      socket.send("pong");
    }
  });
});
