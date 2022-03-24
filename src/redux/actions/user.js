import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  ADD_KNOWN_WORD_SUCCESS,
  ADD_UNKNOWN_WORD_SUCCESS,
} from "../types";
import axios from "axios";

const serv = "http://localhost:4000";

const requestConfig = { headers: { "Content-Type": "application/json" } };

export const getUser = (user) => (dispatch) => {
  const url = `${serv}/api/user?user=${user.login}`;
  axios
    .get(url, requestConfig)
    .then((res) => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data.user });
    })
    .catch((err) => {
      dispatch({ type: GET_USER_FAIL, payload: err });
    });
};

export const registrationUser = (body, callback) => (dispatch) => {
  if (!body.login || !body.password)
    throw new Error("Invalid login or password");
  const url = `${serv}/api/register`;
  axios.post(url, body, requestConfig).then((res) => {
    callback(res);
  });
};

export const authUser = (body, callback) => (dispatch) => {
  if (!body.login || !body.password)
    throw new Error("Invalid login or password");
  const url = `${serv}/api/auth`;
  axios
    .post(url, body, requestConfig)
    .then((res) => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
      callback(res);
    })
    .catch((error) => {
      dispatch({ type: LOGIN_USER_FAIL, payload: error });
    });
};

export const addKnownWord = (login, word, callback) => (dispatch) => {
  const url = `${serv}/api/known`;
  const body = { login, word };
  axios
    .post(url, body, requestConfig)
    .then((res) => {
      callback(res);
      // console.log("add known data :", res.data);
      // dispatch({ type: ADD_KNOWN_WORD_SUCCESS, payload: res.data.item });
    })
    .catch((err) => callback(err));
};
export const addUnknownWord = (login, word, callback) => (dispatch) => {
  const url = `${serv}/api/unknown`;
  const body = { login, word };
  axios
    .post(url, body, requestConfig)
    .then((res) => {
      callback(res);
      // console.log("add unknown data :", res.data.item);
      // dispatch({ type: ADD_UNKNOWN_WORD_SUCCESS, payload: res.data.item });
    })
    .catch((err) => callback(err));
};
export const changeWord = (login, word, new_word, callback) => (dispatch) => {
  const url = `${serv}/api/change_word`;
  const body = { login, word, new_word };
  axios
    .post(url, body, requestConfig)
    .then((res) => callback(res))
    .catch((err) => callback(err));
};

export const deleteWord = (login, word, category, callback) => (dispatch) => {
  const url = `${serv}/api/unknown`;
  const body = { login, word, category };
  axios
    .delete(url, body, requestConfig)
    .then((res) => callback(res))
    .catch((err) => callback(err));
};
