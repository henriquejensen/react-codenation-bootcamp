export const login = payload => ({
  type: "LOGIN",
  payload
});

export const logout = payload => ({
  type: "LOGOUT",
  payload
});

export const loginError = err => ({
  type: "LOGIN_FAILED",
  payload: err
});
