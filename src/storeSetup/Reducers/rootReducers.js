import { combineReducers } from "redux";
import LOGIN from "./loginReducer";

const rootReducer = combineReducers({
  login: LOGIN,
});

export default rootReducer;
