import { RECEIVE_TWEETS, LIKE_TWEET, CREATE_TWEET } from "../actions/types";

const initialData = {};

export default (state = initialData, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      };
    case LIKE_TWEET:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked
            ? state[action.id].likes.concat([action.authedUser])
            : state[action.id].likes.filter(
                userId => userId !== action.authedUser
              )
        }
      };
    case CREATE_TWEET:
      return {
        ...state,
        [action.tweet.replyingTo]: {
          ...state[action.tweet.replyingTo],
          replies: state[action.tweet.replyingTo].replies.concat([
            action.tweet.id
          ])
        },
        [action.tweet.id]: action.tweet
      };
    default:
      return state;
  }
};
