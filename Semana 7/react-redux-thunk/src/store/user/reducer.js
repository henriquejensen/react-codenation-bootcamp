const initialState = {
  isLogged: false
};

export default (state = initialState, { type }) => {
  switch (type) {
    case "LOGIN":
      return { isLogged: true };

    case "LOGOUT":
      return { isLogged: false };

    default:
      return state;
  }
};
