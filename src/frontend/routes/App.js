import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/styles/App.scss';
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
import Call from '../containers/Call';
import Consultant from '../containers/Consultant';
import Consultants from '../containers/Consultants';
import Client from '../containers/Client';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
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
        <Route exact path='/llamada' component={Call} />
        <Route exact path='/consultor' component={Consultant} />
        <Route exact path='/resultados' component={Consultants} />
        <Route exact path='/cliente' component={Client} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
