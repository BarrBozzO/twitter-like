import { SET_CURRENT_USER } from "./types";

export const setAuthedUser = userId => {
  return {
    type: SET_CURRENT_USER,
    id: userId
  };
};
