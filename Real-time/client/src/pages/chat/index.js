// Importing new message component to the Chat page 

import styles from './styles.module.css';
import MessageReceived from './messages';
import SendMessage from './send-message';

const Chat =({ socket, room , username}) => {
    return(
        <div className={styles.chatContainer}>
            <div>
                <MessageReceived socket={socket}/>
                <SendMessage socket={socket} username={username} room={room}/>
            </div>
        </div>
    );
};

export default Chat;