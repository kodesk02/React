import React , { Component} from 'react';
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Die extends Component {
    render() {
        const {face, rolling } = this.props;

        // Using font awesome to show the exact number on the dots 
        return(
            <div>
                <FontAwesomeIcon icon={['fas', `fa-dice-${face}`]} className={`Die ${rolling && 'Die-shaking'}`}/>
            </div>
        )
    }
}

export default Die;