import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addClient } from '../redux/actions';

class CustomerBase extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      age: undefined,
      eMail: undefined,
    }
  }

  handleChange = ({ target }) => {
    const value = target.value;
    this.setState({
      [target.name]: value,
    })
  }

  handleClick = () => {
    const { addClient } = this.props;
    const { name, age, eMail } = this.state;
    const client = {
      name,
      age,
      eMail
    }
    addClient(client);
  }

  render() {
    return (
      <div>
        <label>
          Nome:
        <input type="text" name="name" onChange={ this.handleChange }/>
        </label>
        <label>
          Idade:
        <input type="text" name="age" onChange={ this.handleChange } />
        </label>
        <label>
          E-mail:
        <input type="text" name="eMail" onChange={ this.handleChange } />
        </label>
        <Link to="/clientes-cadastrados" type="submit" onClick={ this.handleClick } >Cadastrar</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addClient: (client) => dispatch(addClient(client)),
})

export default connect(null, mapDispatchToProps)(CustomerBase);
