import { DO_LOGIN } from '../actions/index';

const INITIAL_STATE = {
  users: [],
}

const loginsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case DO_LOGIN :
      return {
        users: state.users.concat(action.payload.userData),
      }
      default :
      return state; 
  }
}

export default loginsReducer;
