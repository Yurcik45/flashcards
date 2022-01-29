import {
  GET_ALL_WORDS_SUCCESS,
  GET_ALL_WORDS_FAIL,
  GET_KNOWN_WORDS_SUCCESS,
  GET_KNOWN_WORDS_FAIL,
  GET_UNKNOWN_WORDS_SUCCESS,
  GET_UNKNOWN_WORDS_FAIL,
  ADD_ALL_WORD_SUCCESS,
  ADD_ALL_WORD_FAIL,
  ADD_KNOWN_WORD_SUCCESS,
  ADD_KNOWN_WORD_FAIL,
  ADD_UNKNOWN_WORD_SUCCESS,
  ADD_UNKNOWN_WORD_FAIL,
  DELETE_WORD_SUCCESS,
  DELETE_WORD_FAIL,
  CHANGE_WORD_SUCCESS,
  CHANGE_WORD_FAIL
} from "../types";

const initialState = [
  {
    id: 0,
    text: "This is a todo",
    completed: false,
  },
];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case ADD_TODO:
    //   return [
    //     ...state,
    //     {
    //       id: state.length,
    //       completed: false,
    //       text: action.payload.text,
    //     },
    //   ];
    default:
      return state;
  }
};
