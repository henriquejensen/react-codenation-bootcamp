import React, { Component } from "react";
import { connect } from "react-redux";
import * as FeedActions from "../store/feed/actions";

export class PostTweet extends Component {
  state = {
    tweet: ""
  };

  handleTweet = tweet => {
    this.setState({ tweet });
  };

  handleAddTweet = () => {
    const { tweet } = this.state;
    const { addTweet } = this.props;
    addTweet(tweet);
    this.setState({ tweet: "" });
  };

  render() {
    const { tweet } = this.state;

    return (
      <div>
        <textarea
          value={tweet}
          onChange={e => this.handleTweet(e.target.value)}
        />
        <button onClick={this.handleAddTweet}>Tweet</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTweet: tweet => dispatch(FeedActions.addTweet(tweet))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(PostTweet);
