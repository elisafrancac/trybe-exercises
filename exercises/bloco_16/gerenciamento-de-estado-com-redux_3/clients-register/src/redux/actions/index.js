export const ADD_CLIENT = 'ADD_CLIENT';
export const DO_LOGIN = "DO_LOGIN";

export const addClient = (client) => ({
  type: ADD_CLIENT,
  payload: {
    client,
  }, 
})

export const doLogin = (userData) => ({
  type: DO_LOGIN,
  payload: {
    userData,
  }
})
