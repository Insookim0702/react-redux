import { createStore, combineReducers } from "redux";
// import toDoReducer from "./reducers/ToDo";
import toDoReducer from "./reducers/ToDoTookit";

const rootReducer = combineReducers({
  toDoState: toDoReducer,
});
const rootStore = createStore(rootReducer);

export default rootStore;
