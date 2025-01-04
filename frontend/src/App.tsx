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
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setmessage(e.target.value)}
        placeholder="type message.."
      />
      <input type="button" value="Send" onClick={sendMessage} />
    </div>
  );
}

export default App;
