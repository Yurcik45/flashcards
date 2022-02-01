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
import axios from "axios";

const requestConfig = { headers: { "Content-Type": "application/json" } };

export const getCategoryWords = (user, category) => (dispatch) => {
  console.group(`get words. user: ${user}, categ: ${category}`);
  const url = category === 'all_words' ? `https://flashcards-f6c98-default-rtdb.firebaseio.com/all_words.json` : `https://flashcards-f6c98-default-rtdb.firebaseio.com/${user}/${category}.json`;
  console.log('url :', url);
  axios
    .get(url, requestConfig)
    .then((res) => {
      let type;
      switch (category) {
        case "all_words":
          type = GET_ALL_WORDS_SUCCESS;
          break;
        case "known_words":
          type = GET_KNOWN_WORDS_SUCCESS;
          break;
        case "unknown_words":
          type = GET_UNKNOWN_WORDS_SUCCESS;
          break;
        case "own_words":
          type = GET_OWN_WORDS_SUCCESS;
          break;
      }
      console.log(`AXIOS ${type}`);
      dispatch({ type, payload: res.data });
    })
    .catch((error) => {
      let type;
      switch (category) {
        case "all":
          type = GET_ALL_WORDS_FAIL;
        case "known_words":
          type = GET_KNOWN_WORDS_FAIL;
        case "unknown_words":
          type = GET_UNKNOWN_WORDS_FAIL;
        case "own_words":
          type = GET_OWN_WORDS_FAIL;
        default:
          type = GET_ALL_WORDS_FAIL;
      }
      console.log(`AXIOS ${type} :`, error);
      dispatch({ type, payload: error });
    });
  console.groupEnd();
};

export const addWord = (user, category, word_item) => (dispatch) => {
  console.group(
    `add word. user: ${user}, categ: ${category}, word: ${word_item}`
  );
  if (category === "all") return false;
  const url = `https://flashcards-f6c98-default-rtdb.firebaseio.com/${user}/${category}.json`;
  axios
    .put(url, word_item, requestConfig)
    .then((res) => {
      console.log("AXIOS PUT SUCCESS :", res);
      dispatch({
        type: ADD_WORD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log("AXIOS PUT FAIL :", error);
      dispatch({
        type: ADD_WORD_FAIL,
        payload: error,
      });
    });
  console.groupEnd();
};

export const updateWord = (user, category, word_item) => (dispatch) => {
  console.group(
    `update word. user: ${user}, categ: ${category}, new_word: ${word_item}`
  );
  if (category === "all") return false;
  const url = `https://flashcards-f6c98-default-rtdb.firebaseio.com/${user}/${category}.json`;

  axios
    .patch(url, word_item, requestConfig)
    .then((res) => {
      console.log("AXIOS PATCH SUCCESS :", res);
      dispatch({
        type: ADD_WORD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log("AXIOS PATCH FAIL :", error);
      dispatch({
        type: ADD_WORD_FAIL,
        payload: error,
      });
    });
  console.groupEnd();
};

// const allWordsUrl = "https://flashcards-f6c98-default-rtdb.firebaseio.com/.json";
// const knownWordsUrl = `https://flashcards-f6c98-default-rtdb.firebaseio.com/${userName}/known_words.json`;
// const unknownWordsUrl = `https://flashcards-f6c98-default-rtdb.firebaseio.com/${userName}/unknown_words.json`;
// const myWordsUrl = `https://flashcards-f6c98-default-rtdb.firebaseio.com/${userName}/my.json`;
