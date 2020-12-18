import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupRequest } from '../actions/index';
import '../assets/styles/containers/Signup.scss';

const Signup = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.signupRequest(form);
    props.history.push('/');
  };
  return (
    <section className='signup'>
     
    </section>
  );
};

const mapDispatchToProps = {
  signupRequest,
};

export default connect(null, mapDispatchToProps)(Signup);
