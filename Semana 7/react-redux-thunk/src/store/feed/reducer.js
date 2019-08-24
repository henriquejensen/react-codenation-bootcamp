const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_ALL_TWEETS":
      return [...state, ...payload];
    case "ADD_TWEET":
      return [...state, { id: Math.random(), tweet: payload }];
    case "REMOVE_TWEET":
      return state.filter(tweet => tweet.id !== payload);

    default:
      return state;
  }
};
