export const DO_LOGIN = "DO_LOGIN";

export const doLogin = (userData) => ({
  type: DO_LOGIN,
  payload: {
    userData,
  }
})
