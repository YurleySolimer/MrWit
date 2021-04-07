import axios from 'axios';
import React from 'react';
import '../assets/styles/containers/Call.scss';
import send from '../assets/static/icons/send.svg';



function HomeCall(props) {
    const handleJoin = () => {
        axios.get(`${axios.defaults.baseURL}/join`).then(res => {
            props.history?.push(`/join/${res.data.link}? 
           `);
        })
    }

    return (
        <React.Fragment>
            <div>                
                <div className='call__controls__bottom'>
                    <div>
                        <br/><br/><br/> <br/><br/>
                        <h4> JOIN </h4>
                        <button type='button' onClick={handleJoin}  className='call__controls'><img src={send} alt='audio icon' /></button>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default HomeCall;