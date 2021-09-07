import React, { useState } from 'react';
import { useChat } from '../../contexts/chat';
import { Button } from '../InputChat/style';
import { Modal, ModalContent } from './style';

const SingInModal: React.FC = () => {
  const { initChatService } = useChat();

  const [name, setName] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if(name) {
      initChatService(name);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3500);
    }
  }

  return (
    <Modal>
      <ModalContent>
        <h3>Bem vindo</h3>
        <label>Informe seu nome:</label> 
        <input  onChange={({target}) => setName(target.value)}/>
        {showError ? <span>Informe um nome válido *</span> : null }
        <Button onClick={handleSubmit}> Entrar </Button>
      </ModalContent>
    </Modal>
  )
}

export default SingInModal;