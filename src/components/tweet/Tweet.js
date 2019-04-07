import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { handleLikeTweet } from "../../actions/tweets";
import { formatTweet, formatDate } from "../../utils/helpers";

function Tweet(props) {
  const { tweet, auth } = props;
  const handleLikeClick = e => {
    e.preventDefault();
    props.handleLikeTweet(tweet.id, auth.id, !tweet.hasLiked);
  };
  return (
    <Link to={`/${props.id}`} className="tweet">
      <img
        className="tweet__avatar"
        src={tweet.avatar}
        alt="tweet author avatar"
      />
      <div className="tweet__data">
        <div className="tweet__name">{tweet.name}</div>
        <div className="tweet__login">@{tweet.id}</div>
        <div className="tweet__date">{formatDate(tweet.timestamp)}</div>
        <p className="tweet__desc">{tweet.text}</p>
        <div>
          <button className="btn">
            <i className="icon icon_reply" />
          </button>
          <button className="btn" onClick={handleLikeClick}>
            <i className="icon icon_like" />
          </button>
        </div>
      </div>
    </Link>
  );
}

Tweet.propTypes = {
  id: PropTypes.string.isRequired
};

const mapStateToProps = (state, props) => {
  const tweet = state.tweets[props.id],
    author = state.users[tweet.author],
    authedId = state.auth.id,
    parentTweet = tweet.replyingTo ? state.tweets[tweet.replyingTo] : null;

  return {
    tweet: formatTweet(tweet, author, authedId, parentTweet),
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { handleLikeTweet }
)(Tweet);
