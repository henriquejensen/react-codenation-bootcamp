import React, { Component } from "react";
import { connect } from "react-redux";
import * as FeedActions from "../store/feed/actions";

export class Feed extends Component {
  handleDelete = tweet => {
    this.props.removeTweet(tweet);
  };

  render() {
    const { tweets } = this.props;

    if (tweets.length === 0) {
      return <p>Nenhum tweet encontrado</p>;
    }

    return (
      <div>
        <ul>
          {tweets.map(tweet => (
            <li key={tweet.id}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h1>{tweet.tweet}</h1>
                <div>
                  <button onClick={() => this.handleDelete(tweet)}>
                    Deletar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.feed
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeTweet: tweet => dispatch(FeedActions.removeTweet(tweet.id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
