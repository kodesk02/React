import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';


// To be able to access the props we add them to the home page 
const Home = ({username , setUsername, room , setRoom , socket}) =>{
    const navigate = useNavigate();

    const joinRoom =()=>{
        if (room !== '' && username !== ''){
            socket.emit('join_room',{username, room});
        }
        // Redirect to /chat 
        navigate('/chat', {replace: true});
    };


return(
    <div className={styles.container}>
        <div className={styles.formContainer}>
            <h1>{`Kits Chat`}</h1>
            {/* Any action the user does should be updated so the following is added  */}
            <input
             className={styles.input}
             placeholder='Username...'
             onChange={(e)=> setUsername(e.target.value)}
             />

            <select className={styles.input}
            onChange={(e)=> setRoom(e.target.value)}
            >
                <option>Select room</option>
                <option value='Javascript'>Javascript</option>
                <option value='node'>Node</option>
                <option value='express'>Express</option>
                <option value='react'>React</option>
            </select>

            <button 
            className='btn btn-default'
            style={{width:'100%'}}
            onClick={joinRoom}
            >Join Room</button>
        </div>
    </div>
);
};

export default Home; 