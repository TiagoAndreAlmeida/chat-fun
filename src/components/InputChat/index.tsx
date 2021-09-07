import React, { useState } from 'react';

import { useChat } from '../../contexts/chat';
import { Container, ChatInput, Button } from './style';

const GeralChat: React.FC = () => {
  const { socket, user } = useChat();

  const [message, setMessage] = useState("");

  const submitMessage = () => {
    if (message) {
      socket?.emit("geral", {
        user: user, message
      });
      setMessage("");
    }
  }

  return (
    <Container>
      <ChatInput 
      id="input-message" 
      name="input-message" 
      value={message} 
      onChange={({ target }) => setMessage(target.value)} />
      <Button onClick={submitMessage}>ENVIAR</Button>
    </Container>
  )
}

export default GeralChat;