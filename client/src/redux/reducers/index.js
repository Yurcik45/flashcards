import words from "./words";
import user from "./user";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  words,
  user,
});
export default rootReducer;
