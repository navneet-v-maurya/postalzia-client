import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import postReducer from "./PostReducer";

const Reducer = combineReducers({
  authReducer,
  postReducer,
});

export default Reducer;
