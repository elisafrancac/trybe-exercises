import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage'

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to="/login">Faça o login</Link>
        <Switch>
          <Route path="/login" component={ LoginPage } />
        </Switch>
      </div>
    )
  }
}
