import React, { Component } from "react";
import { connect } from "react-redux";

import Tweet from "./Tweet";
import AddTweetForm from "./AddTweetForm";
import TweetList from "./TweetList";

class TweetPage extends Component {
  render() {
    return (
      <div>
        {this.props.tweetExists ? (
          <div>
            <Tweet id={this.props.tweetId} />
            <AddTweetForm replyingTo={this.props.tweetId} />
            <TweetList tweetsIds={this.props.tweetReplies} />
          </div>
        ) : (
          <p>tweet doesn't exist!</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const {
    match: { params }
  } = props;
  const tweetId = params.id;
  const tweetExists = !!state.tweets[tweetId];
  const tweetReplies = tweetExists ? state.tweets[tweetId].replies : [];
  return {
    tweetExists,
    tweetId,
    tweetReplies
  };
};

export default connect(mapStateToProps)(TweetPage);
