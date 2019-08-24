import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PostTweet from "./PostTweet";
import Feed from "./Feed";
import * as UserThunks from "../store/user/thunks";

function Home(props) {
  if (!props.user.isLogged) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div>
        <h1>Twitter Codenation</h1>
        <button onClick={props.logout}>Logout</button>
      </div>
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

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(UserThunks.logout())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
