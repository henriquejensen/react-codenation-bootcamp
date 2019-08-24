const initialState = {
  isLogged: false,
  error: false,
  message: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { isLogged: true, error: false, message: "" };

    case "LOGOUT":
      return { isLogged: false, error: false, message: "" };

    case "LOGIN_FAILED":
      return { isLogged: false, error: true, message: payload };

    default:
      return state;
  }
};
