import React, { useState } from 'react';

const Chat = () => {

    const [message, setMessage] = useState("");

    const submitMessage = () => {
        if(message) {

        }
    }

    return (
        <div>
            <label>Digite sua mensagem: </label>
            <input id="mgs" value={message} onChange={({target}) => setMessage(target.value)}/>
            <button onClick={submitMessage}>Enviar</button>
        </div>
    )
}

export default Chat;