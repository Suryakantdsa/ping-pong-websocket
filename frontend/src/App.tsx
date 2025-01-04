import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [message, setmessage] = useState("");
  const [socket, setsocket] = useState<WebSocket>();

  const sendMessage = () => {
    socket?.send(message);
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000");
    setsocket(ws);

    // ws.onopen = () => {};
    // ws.onerror = () => {};
    // ws.close = () => {};
    ws.onmessage = (event) => {
      alert(event.data);
    };
  }, []);

  return (
    <>
      <h1>Ping-pong app</h1>
      <div style={{ height: "30px" }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          placeholder="type message.."
          style={{ height: "85%", paddingLeft: "10px" }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <input
          type="button"
          value="Send"
          onClick={sendMessage}
          style={{ height: "100%" }}
        />
      </div>
    </>
  );
}

export default App;
