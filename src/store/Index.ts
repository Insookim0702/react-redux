import { createStore, combineReducers } from "redux";
import toDoReducer from "./reducers/ToDo";

const rootReducer = combineReducers({
  toDoState: toDoReducer,
});
const rootStore = createStore(rootReducer);

export default rootStore;
