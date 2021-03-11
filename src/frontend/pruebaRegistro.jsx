import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux'  
import axios from 'axios'
import * as actionsStatus from './actions';


 const pruebaRegistro = (props) => {
    const [input, setInput] = useState({
      name: '',
      email: '',
      password: '',
      rol: '',
    });

       function handleSubmitConsultant (event) {
            event.preventDefault()
            console.log(name.value, email.value, password.value, rol.value)
            const res = axios.post('http://localhost:3000/signup', 
            {
                name : name.value, 
                email:  email.value, 
                password:  password.value,
                rol: rol.value

              })          
              .then ( res =>  {
                console.log(res.data);
                history.push('/');       
                })
              .catch(e => console.log(e))      

        }     

        return (            
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 returnHome">
                        <br/> <br/> <br/> <br/> <br/>
                        <Link to="/" className="link"><i class="fas fa-backspace"></i> Return Home</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 offset-1 text-center registerText">
                        <h3>Register to become a new user</h3>
                        <p>Already have an account? <Link to="/login" className="link">Log In</Link></p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 offset-1 text-center">
                        <form  onSubmit={handleSubmitConsultant}>
                            {/* Name */}
                            <div className="col-8 offset-2">
                                <label htmlFor="name">Name:</label>
                                <span className="text-light"></span>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name..."
                                />
                            </div>

                            {/* Email */}
                            <div className="col-8 offset-2">
                                <label htmlFor="email">Email:</label>
                                <span className="text-light"></span>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email..."
                                />
                            </div>

                            {/* Password */}
                            <div className="col-8 offset-2">
                                <label htmlFor="password">Password:</label>
                                <span className="text-light"></span>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter a password..."
                                />
                            </div>

                            

                            {/* Submit button */}
                            <div className="col-8 offset-2">
                                <button className="btn signupbtn" type="submit" name="rol" id="rol" value="consultant">
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );

 }

 export default pruebaRegistro;