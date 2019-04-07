import { SET_CURRENT_USER } from "../actions/types";

const initialData = {};

export default (state = initialData, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
};
