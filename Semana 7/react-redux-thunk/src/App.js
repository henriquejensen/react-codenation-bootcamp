import React from "react";
import { Provider } from "react-redux";
import Feed from "./containers/Feed";
import store from "./store";
import PostTweet from "./containers/PostTweet";

function App() {
  return (
    <Provider store={store}>
      <h1>Twitter Codenation</h1>
      <PostTweet />
      <Feed />
    </Provider>
  );
}

export default App;
