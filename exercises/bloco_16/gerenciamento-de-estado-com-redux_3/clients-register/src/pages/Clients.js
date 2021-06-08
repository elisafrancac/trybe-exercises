import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeClient } from '../redux/actions';

class Clients extends Component {

  render() {

    const { users, clients, removeClient } = this.props;
    if (users.length === 0) {
      return (
        <div>
          <p>Login não efetuado</p>
          <Link to="/cadastro">Cadastrar Cliente</Link>
        </div>
      )     
    }  
     
    return clients.length === 0 ?(
      <div>
        <h3>Nenhum cliente cadastrado</h3>
        <Link to="/cadastro">Cadastrar Cliente</Link>
      </div>
    ) : (
      <div>
        <h1>Clientes Cadastrados</h1>
        <ul>
          {clients.map((client) => (
            <li key={ client.eMail }>
              { client.name }
              <button onClick={ () => removeClient(client) }>X</button>
            </li>
          ))}
        </ul>
        <Link to="/cadastro">Cadastrar Cliente</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  clients: state.clientsReducer.clients,
  users: state.loginsReducer.users,
});

const mapDispatchToProps = (dispatch) => ({
  removeClient: (client) => dispatch(removeClient(client)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
