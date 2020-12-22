import React, { 
  createContext, useContext, useState
} from 'react';
import { io, Socket } from "socket.io-client";

interface ChatContextData {
  socket: Socket | null;
  initChatService(): void;
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData);

export const ChatProvider: React.FC = ({children}) => {

  const [socket, setSocket] = useState<Socket|null>(null);

  const initChatService = () => {
    const _socket = io('http://localhost:3333');
    setSocket(_socket);
    // socket.on("FromAPI", (data: any) => {
    //   console.log(data);
    // });
  }

  return (
    <ChatContext.Provider 
    value={{
      socket,
      initChatService
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat () {
  const context = useContext(ChatContext);
  return context;
}

export default ChatContext;