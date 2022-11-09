import { combineReducers } from "redux";
import authReducer from "./AuthReducer";

const Reducer = combineReducers({
  authReducer,
});

export default Reducer;
