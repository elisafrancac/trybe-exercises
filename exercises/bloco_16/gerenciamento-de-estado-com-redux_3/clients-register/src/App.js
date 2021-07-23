import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Clients from './pages/Clients';
import CustomerBase from './pages/CustomerBase';

export default class App extends Component {
  render() {
    return (
      <div>
      <Link to="/login">Faça o login</Link>
      <Switch>
        <Route path="/login" component={ LoginPage } />
        <Route path="/clientes-cadastrados" component= { Clients } />
        <Route path="/cadastro" component= { CustomerBase } />
      </Switch>
    </div>
    )
  }
}
