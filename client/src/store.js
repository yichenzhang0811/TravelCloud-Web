import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk"; // ✅ 正确导入 thunk
import cityReducer from "./reducers/cityReducer";
import userReducer from "./reducers/userReducer";
import postsReducer from "./reducers/postsReducer";
import commentReducer from "./reducers/commentReducer";

const rootReducer = combineReducers({
  users: userReducer,
  auth: userReducer,
  citiesData: cityReducer,
  postsData: postsReducer,
  commentsData: commentReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
