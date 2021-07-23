import { ADD_CLIENT, REMOVE_CLIENT } from '../actions/index';

const INITIAL_STATE = {
  clients: [],
}

const clientsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_CLIENT :
      return {
        clients: state.clients.concat(action.payload.client),
      }
    case REMOVE_CLIENT :
      return {
        clients: state.clients.filter((eachClient) => eachClient !== action.client),
      };
    default :
      return state;
  }
}

export default clientsReducer;
