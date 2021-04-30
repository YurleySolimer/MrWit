import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import axios from 'axios';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Search from '../containers/Search';
import Recharge from '../containers/Recharge';
import Blog from '../containers/Blog';
import Post from '../containers/Post';
import Schedule from '../containers/Schedule';
import Wallet from '../containers/Wallet';
import History from '../containers/History';
import Help from '../containers/Help';
import HelpArticle from '../containers/HelpArticle';
import Call from '../containers/Call';
import Consultants from '../containers/Consultants';
import Consultant from '../containers/Consultant';
import ConsultantFavorite from '../containers/ConsultantFavorite';

import HomeCall from '../videollamada/home';
import RoomComponent from '../videollamada/roomComponent';
import socket from '../socket';

import Transaction from '../Tools/TransactionPayu';

const App = ({ user }) => {

  function handleSocketID(id, value) {
    const socketConsultant = {
      socketID: id,
    };
    const res = axios.post(`${axios.defaults.baseURL}/user/${value}/socket`, socketConsultant)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    if (user.id) {
      socket.connect();
      socket.on('me', (id) => {
        handleSocketID(id, user.id);
      });
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path ='/transaction/:id_client/:name/:amount/:id_transaction' component={Transaction} />
          
          <Route exact path='/homeCall' component={HomeCall} />
          <Route path='/join/:id' component={RoomComponent} />

          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/buscar' component={Search} />
          <Route exact path='/recargar' component={Recharge} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/blog/post' component={Post} />
          <Route exact path='/agenda' component={Schedule} />
          <Route exact path='/wallet' component={Wallet} />
          <Route exact path='/historial' component={History} />
          <Route exact path='/ayuda' component={Help} />
          <Route exact path='/ayuda/pregunta' component={HelpArticle} />
          <Route exact path='/llamada' component={Call} />
          <Route exact path='/resultados' component={Consultants} />
          <Route exact path='/resultados/:id' component={Consultant} />
          <Route exact path='/favorito/:id' component={ConsultantFavorite} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.statusReducers;
};

export default connect(mapStateToProps, null)(App);
