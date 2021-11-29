import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const toDoReducer = (
  state = [],
  action: { type: string; payload: string | number; id: string }
) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter(
        (s: { text: string; id: string }) => s.id !== action.payload
      );
    default:
      return state;
  }
};

export const actionCreators = {
  addToDo,
  deleteToDo,
};
export default toDoReducer;
