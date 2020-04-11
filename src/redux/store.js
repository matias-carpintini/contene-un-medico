import { createStore } from "redux";

const reducer = (state, action) => {
  if (action.type === "SAVE_USER") {
    return {
      ...state,
      user: action.user,
    };
  }
  return state;
};

export default createStore(reducer, { user: { token: null, data: {} } });
