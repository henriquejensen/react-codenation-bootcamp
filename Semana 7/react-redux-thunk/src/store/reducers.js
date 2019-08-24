import { combineReducers } from "redux";
import feedReducer from "./feed/reducer";
import userReducer from "./user/reducer";

export default combineReducers({ feed: feedReducer, user: userReducer });
