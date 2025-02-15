import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cityReducer from "./cityReducer";

export default combineReducers({
  users: userReducer,
  auth: userReducer, // for authorization
  citiesData: cityReducer,
});
