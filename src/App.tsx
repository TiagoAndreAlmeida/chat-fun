import React, {useState, useEffect} from 'react';

import { useChat } from './contexts/chat';
import ChatList from './pages/chatList';
// import Chat from './pages/chat';

function App() {
  const { initChatService } = useChat();
  
  useEffect(() => {
    initChatService();
  }, [])

  return (
    <div className="App">
      <ChatList />
    </div>
  );
}

export default App;
