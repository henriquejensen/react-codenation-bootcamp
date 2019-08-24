const initialState = [
  { id: 1, tweet: "Hello World" },
  { id: 2, tweet: "Mais um textao" }
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TWEET":
      return [...state, { id: Math.random(), tweet: payload }];
    case "REMOVE_TWEET":
      return state.filter(tweet => tweet.id !== payload);

    default:
      return state;
  }
};
