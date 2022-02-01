import {
  GET_ALL_WORDS_SUCCESS,
  GET_ALL_WORDS_FAIL,
  GET_KNOWN_WORDS_SUCCESS,
  GET_KNOWN_WORDS_FAIL,
  GET_UNKNOWN_WORDS_SUCCESS,
  GET_UNKNOWN_WORDS_FAIL,
  ADD_ALL_WORD_SUCCESS,
  ADD_ALL_WORD_FAIL,
  ADD_WORD_SUCCESS,
  ADD_WORD_FAIL,
  ADD_KNOWN_WORD_SUCCESS,
  ADD_KNOWN_WORD_FAIL,
  ADD_UNKNOWN_WORD_SUCCESS,
  ADD_UNKNOWN_WORD_FAIL,
  DELETE_WORD_SUCCESS,
  DELETE_WORD_FAIL,
  CHANGE_WORD_SUCCESS,
  CHANGE_WORD_FAIL,
  GET_OWN_WORDS_SUCCESS,
  GET_OWN_WORDS_FAIL
} from "../types";

const initialState = {
  all_words: [],
  known_words: [],
  unknown_words: [],
  own_words: [],
  empty_msg: '',
  error_msg: '',
}

export default (state = initialState, action = {}) => {
  console.log('reducer action :', action);
  switch (action.type) {
    case GET_ALL_WORDS_SUCCESS:
      return {
        ...state,
        all_words: action.payload,
    };
    case GET_KNOWN_WORDS_SUCCESS:
      return {
        ...state,
        known_words: action.payload,
    };
    case GET_UNKNOWN_WORDS_SUCCESS:
      return {
        ...state,
        unknown_words: action.payload,
    };
    case GET_OWN_WORDS_SUCCESS:
      return {
        ...state,
        own_words: action.payload,
    };
    default:
      return state;
  }
};
