import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import MessageField from "./MessageField";
import ServerField from "./ServerField";
import Message from "./Message";



function App() {
  const [socket, setSocket] = useState(null)
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [host, setHost] = useState("http://localhost:8080")

  useEffect(() => {
    const socket = io(host);
    setSocket(socket);

    console.log("hello!")
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('message', (message) => {
      console.log("whoa cool a message:", message)
      setMessages((oldMessages) => [...oldMessages, message]);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('message');
      setIsConnected(false)
    };
  }, [host]);

  const sendPing = () => {
    socket.emit('ping');
  }

  //TODO: useApi hook?
  //pass sendMessage function to messageField

  return (
    <div>
      <p>Connected: { '' + isConnected }</p>
      <ServerField host={host} setHost={setHost} />
      <MessageField host={host} />
      {messages.map((e) => <Message key={e.id} content={e.content} />)}
    </div>
  );
}

export default App;
