import { combineReducers } from "redux";
import seatingReducer from "./seating";

const RootReducer = combineReducers({
  seatingReducer,
});

export default RootReducer;
