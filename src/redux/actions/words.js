import {
  GET_ALL_WORDS_SUCCESS,
  GET_ALL_WORDS_FAIL,
  ADD_KNOWN_WORD_SUCCESS,
  ADD_KNOWN_WORD_FAIL,
  ADD_UNKNOWN_WORD_SUCCESS,
  ADD_UNKNOWN_WORD_FAIL,
} from "../types";
import axios from "axios";

const requestConfig = { headers: { "Content-Type": "application/json" } };

const serv = "http://localhost:4000";

export const getAllWords = (limit) => (dispatch) => {
  const url = `${serv}/api?limit=${limit ? limit : 0}`;
  axios
    .get(url, requestConfig)
    .then((response) => {
      dispatch({ type: GET_ALL_WORDS_SUCCESS, payload: response.data });
    })
    .catch(function (error) {
      dispatch({ type: GET_ALL_WORDS_FAIL, payload: error });
    });
};
