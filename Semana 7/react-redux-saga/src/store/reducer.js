const initialState = {
  data: [],
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "REQUEST_TODO_LIST":
      return { ...state, loading: true };

    case "SUCCESS_TODO_LIST":
      return { data: payload.data, loading: false, error: null };

    case "FAILED_TODO_LIST":
      return { data: [], loading: false, error: "Falha ao carregar os todos" };

    default:
      return state;
  }
};
