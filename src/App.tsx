import React, { useState, useEffect } from 'react';
import SideMenu from './containers/Sidemenu';

import { useChat, IUser } from './contexts/chat';
import MainContent from './containers/Content';

import './style.css';
import GeralChat from './components/InputChat';
import SingInModal from './components/SinginModal';

interface IChatMessage {
  user: IUser,
  message: string
}

function App() {
  const { socket, user } = useChat();

  const [messageList, setMessageList] = useState<IChatMessage[]>([]);

  useEffect(() => {
  }, [])

  useEffect(() => {
    if(socket){
      addEventListener();
    }
  }, [socket])

  const addEventListener = () => {
    socket?.on("geral", (data: IChatMessage) => {
      setMessageList(prevData => [...prevData, data]);
    });
  }

  console.log(messageList)

  return (
    <div className="App">
      <SideMenu />
      <MainContent>
        <div style={{ flex: 1 }}>
          {messageList.map((mgs, index) => (
            <div key={index}>
              <strong>{mgs.user.name}: </strong>
              <span>{mgs.message}</span>
            </div>
          ))}
        </div>
        <GeralChat />
      </MainContent>
      {user ? null : <SingInModal /> }
    </div>
  );
}

export default App;
