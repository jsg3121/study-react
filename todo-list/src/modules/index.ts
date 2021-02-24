import { combineReducers } from "redux";
import activeLogin from "./module/loginModule";

const rootReducer = combineReducers({
  activeLogin,
});

export default rootReducer;
