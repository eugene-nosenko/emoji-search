import { combineReducers } from "redux";

import favoriteReducer from "./favorite";
import authReducer from "./auth";

export default combineReducers({
  favorite: favoriteReducer,
  auth: authReducer
});
