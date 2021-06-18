import React, { Component } from 'react';
import { doLogin } from '../redux/actions/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      eMail: '',
      password:'',
    }
  }

  handleChange = ({ target }) => {
    const value = target.value;
    this.setState({
      [target.name]: value,
    })
  }

  handleClick = () => {
    const { doLogin } = this.props;
    const { eMail, password } = this.state;
    const dataLogin = {
      eMail,
      password
    }
    doLogin(dataLogin);
  }

  render() {
    return (
      <div>
        <label>
          E-mail:
        <input name="eMail" type="text" onChange={ this.handleChange } />
        </label>
        <label>
          Senha:
        <input name="password" type="password" onChange={ this.handleChange }/>
        </label>
        <Link to="clientes-cadastrados" onClick={ this.handleClick }>Entrar</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  doLogin: (userData) => dispatch(doLogin(userData)),
})

export default connect(null, mapDispatchToProps)(LoginPage);
