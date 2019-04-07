import { RECEIVE_USERS } from "../actions/types";

const initialData = {};

export default (state = initialData, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    default:
      return state;
  }
};
