import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import postReducer from "./PostReducer";
import ChatReducer from "./ChatReducer";
import messageReducer from "./MessageReducer";

const Reducer = combineReducers({
  authReducer,
  postReducer,
  ChatReducer,
  messageReducer,
});

export default Reducer;
