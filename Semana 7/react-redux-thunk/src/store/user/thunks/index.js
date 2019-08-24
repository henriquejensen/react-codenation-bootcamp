import { apiLogin, apiLogout } from "../api/index";
import {
  login as actionLogin,
  logout as actionLogout,
  loginError
} from "../actions";

export const login = (email, password) => {
  return dispatch => {
    apiLogin(email, password)
      .then(result => dispatch(actionLogin(result)))
      .catch(err => dispatch(loginError(err)));
  };
};

export const logout = () => {
  return dispatch => {
    apiLogout().then(result => dispatch(actionLogout()));
  };
};
