import React, {useState, useEffect} from 'react';
import { io } from "socket.io-client";
import Chat from './components/chat';

function App() {
  
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = io('http://localhost:3333');
    socket.on("FromAPI", (data: any) => {
      setResponse(data);
    });
  }, [])

  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
