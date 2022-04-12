import { GET_ALL_WORDS_SUCCESS, GET_ALL_WORDS_FAIL } from "../types";

const initialState = {
  generalWords: [],
  error_msg: "",
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_WORDS_SUCCESS:
      return {
        ...state,
        generalWords: action.payload,
      };
    case GET_ALL_WORDS_FAIL:
      return {
        generalWords: [],
        error_msg: action.payload,
      };
    default:
      return state;
  }
};
