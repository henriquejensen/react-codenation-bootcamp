import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PostTweet from "./PostTweet";
import Feed from "./Feed";

function Home(props) {
  if (!props.user.isLogged) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>Twitter Codenation</h1>
      <PostTweet {...props} />
      <Feed {...props} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Home);
