import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  ADD_KNOWN_WORD_SUCCESS,
  ADD_UNKNOWN_WORD_SUCCESS,
  ADD_WORD_SUCCESS,
  ADD_WORD_FAIL,
  CHANGE_WORD_SUCCESS,
  CHANGE_WORD_FAIL,
  LOGOUT_USER_SUCCESS,
} from "../types";
import axios from "axios";

const serv = "http://localhost:4000";

const requestConfig = { headers: { "Content-Type": "application/json" } };

export const userLogOut = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOGOUT_USER_SUCCESS })
}

export const getUser = (login) => (dispatch) => {
  const url = `${serv}/api/user?user=${login}`;
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

export const addWordAction = (login, word, list, callback) => {
  const url = `${serv}/api/words`;
  const body = { login, word, list };
  axios
    .post(url, body, requestConfig)
    .then((res) => {
      callback(res);
    })
    .catch(callback);
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
