export const addTweet = text => ({
  type: "ASYNC_ADD_TWEET",
  payload: {
    text
  }
});
