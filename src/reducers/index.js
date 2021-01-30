import { combineReducers } from "redux";
import reducer from "./ChatReducer";

export default combineReducers({
  data: reducer
});