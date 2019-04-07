import { GET_INITIAL_DATA } from "./types";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { setAuthedUser } from "./auth";
import { showLoading, hideLoading } from "react-redux-loading";

import { getInitialData } from "../utils/api";

const currentUserId = "barrbozzo";

export const handleInitialData = () => dispatch => {
  dispatch(showLoading());
  getInitialData().then(({ users, tweets }) => {
    // fetch initial data
    dispatch(receiveUsers(users));
    dispatch(receiveTweets(tweets));
    dispatch(setAuthedUser(currentUserId));
    dispatch(hideLoading());
  });
};
