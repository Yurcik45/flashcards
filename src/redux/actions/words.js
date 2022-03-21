import { GET_ALL_WORDS_SUCCESS, GET_ALL_WORDS_FAIL } from "../types";
import axios from "axios";

const requestConfig = { headers: { "Content-Type": "application/json" } };

export const getAllWords =
  (limit = 50) =>
  (dispatch) => {
    const url = "http://localhost:4000/api?limit=2";
    axios
      .get(url, requestConfig)
      .then((response) => {
        dispatch({ type: GET_ALL_WORDS_SUCCESS, payload: response.data });
      })
      .catch(function (error) {
        dispatch({ type: GET_ALL_WORDS_FAIL, payload: error });
      });
  };
