import React from "react";
import PropTypes from "prop-types";

import Tweet from "./Tweet";

function TweetList(props) {
  return (
    <div>
      {props.tweetsIds.map(tweetId => (
        <Tweet key={tweetId} id={tweetId} />
      ))}
    </div>
  );
}

TweetList.propTypes = {
  tweetsIds: PropTypes.array.isRequired
};

export default TweetList;
