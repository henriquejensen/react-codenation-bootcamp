import { getTweet } from "../api";
import { getAllTweets as actionGetAllTweets } from "../actions";

export const getAllTweets = () => {
  return dispatch => {
    getTweet().then(data => dispatch(actionGetAllTweets(data.results)));
  };
};
