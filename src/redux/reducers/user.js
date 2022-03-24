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

const initialState = {
  login: "",
  role: "",
  knownWords: [],
  unknownWords: [],
  changedWords: [],
  newWords: [],
  error_msg: "",
  loginned: false,
};

export default (state = initialState, action = {}) => {
  console.log('action', action);
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        login: action.payload.login,
        role: action.payload.role,
        knownWords: action.payload.knownWords ?? [],
        unknownWords: action.payload.unknownWords ?? [],
        changedWords: action.payload.changedWords ?? [],
        newWords: action.payload.newWords ?? [],
        loginned: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        login: action.payload.login,
        role: action.payload.role,
        knownWords: action.payload.knownWords ?? [],
        unknownWords: action.payload.unknownWords ?? [],
        changedWords: action.payload.changedWords ?? [],
        newWords: action.payload.newWords ?? [],
        loginned: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        login: action.payload.login,
        role: action.payload.role,
        knownWords: action.payload.knownWords ?? [],
        unknownWords: action.payload.unknownWords ?? [],
        changedWords: action.payload.changedWords ?? [],
        newWords: action.payload.newWords ?? [],
        loginned: true,
      };
    case ADD_KNOWN_WORD_SUCCESS:
      return {
        ...state,
        knownWords: state.knownWords.push(action.payload),
      };
    case ADD_UNKNOWN_WORD_SUCCESS:
      return {
        ...state,
        unknownWords: state.unknownWords.push(action.payload),
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        error_msg: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error_msg: action.payload,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        error_msg: action.payload,
      };
    default:
      return state;
  }
};
