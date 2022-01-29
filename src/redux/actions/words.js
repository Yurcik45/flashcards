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
  CHANGE_WORD_FAIL
} from "../types";
import axios from 'axios';

export const addWord = (word_item) => (dispatch) => {

  dispatch({
    type: ADD_WORD_SUCCESS,
    payload: { word_item },
  });
}
