import { RECEIVE_TWEETS, LIKE_TWEET, CREATE_TWEET } from "./types";
import { showLoading, hideLoading } from "react-redux-loading";

import { saveLikeToggle, saveTweet } from "../utils/api";

const likeTweet = ({ id, authedUser, hasLiked }) => {
  return {
    type: LIKE_TWEET,
    id,
    authedUser,
    hasLiked
  };
};

const createTweet = tweet => {
  return {
    type: CREATE_TWEET,
    tweet
  };
};

export const handleLikeTweet = (id, authedUser, hasLiked) => dispatch => {
  saveLikeToggle({ id, authedUser, hasLiked }).then(likedTweet => {
    dispatch(
      likeTweet({
        id,
        authedUser,
        hasLiked
      })
    );
  });
};

export const handleCreateTweet = (text, author, replyingTo) => dispatch => {
  const tweetData = {
    text,
    author,
    replyingTo
  };
  console.log(tweetData);
  dispatch(showLoading());
  saveTweet(tweetData).then(savedTweet => {
    dispatch(createTweet(savedTweet));
    dispatch(hideLoading());
  });
};

export const receiveTweets = tweets => {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
};
