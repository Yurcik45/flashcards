import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
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

export const registrationUser = (body) => (dispatch) => {
  if (!body.login || !body.password)
    throw new Error("Invalid login or password");
  const url = `${serv}/api/register`;
  axios
    .post(url, body, requestConfig)
    .then((res) => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: REGISTER_USER_FAIL, payload: error });
    });
};

export const authUser = (body) => (dispatch) => {
  if (!body.login || !body.password)
    throw new Error("Invalid login or password");
  const url = `${serv}/api/auth`;
  axios
    .post(url, body, requestConfig)
    .then((res) => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_USER_FAIL, payload: error });
    });
};