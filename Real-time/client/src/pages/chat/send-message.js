// An input and button to type and send message 

import styles from './styles.module.css';
import React , { useState } from 'react';

const SendMessage = ({ socket, username, room }) => {
    const [message, setMesssage] = useState('');

    const sendMessage = () => {
        if (message !== ''){
            const __createdtime__ =Date.now();
            // Send message to server . We cant specify who we send the message to from the frontend . We can only send to server . Server can then send message to the users in the room
            socket.emit('send_message' , {username, room , message , __createdtime__});
            setMesssage('');
        }
    };

    return(
        <div className={styles.sendMessageContainer}>
            <input
             className={styles.messageInput}
             placeholder='Message...'
             onChange={(e) => setMesssage(e.target.value)}
             value={message}
            />
            <button className='btn btn-default' onClick={sendMessage}>
                Send Message
            </button>
        </div>
    );
};


export default SendMessage;