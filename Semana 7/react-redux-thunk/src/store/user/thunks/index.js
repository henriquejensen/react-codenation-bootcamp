import { apiLogin } from "../api/index";
import { login as actionLogin } from "../actions";

export const login = (email, password) => {
  console.log("adfasd");
  return dispatch => {
    apiLogin(email, password).then(result => dispatch(actionLogin(result)));
  };
};
