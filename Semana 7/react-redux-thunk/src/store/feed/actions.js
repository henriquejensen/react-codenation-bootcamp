export const addTweet = tweet => ({
  type: "ADD_TWEET",
  payload: tweet
});

export const removeTweet = id => ({
  type: "REMOVE_TWEET",
  payload: id
});
