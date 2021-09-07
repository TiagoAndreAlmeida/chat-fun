import React, { 
  createContext, useContext, useState
} from 'react';
import { io, Socket } from "socket.io-client";

interface ChatContextData {
  user: IUser | null;
  socket: Socket | null;
  initChatService(name: string): void;
}

export interface IUser {
  name: string;
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData);

export const ChatProvider: React.FC = ({children}) => {

  const [user, setUser] = useState<IUser|null>(null)
  const [socket, setSocket] = useState<Socket|null>(null);

  const initChatService = (name: string) => {
    const _socket = io('http://localhost:5000', {
      auth: {
        name
      }
    });
    setSocket(_socket);
    setUser({...user, name});
  }

  return (
    <ChatContext.Provider 
    value={{
      user,
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