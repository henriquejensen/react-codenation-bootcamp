const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: payload.text }];

    default:
      return state;
  }
};
