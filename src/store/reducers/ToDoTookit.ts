import { createAction, createReducer } from "@reduxjs/toolkit";
import { RootState } from "../../routes/Home";
const addToDo = createAction<string | undefined>("ADD");
const deleteToDo = createAction<number | undefined>("DELETE");

// const toDoReducer = (state = [], action: { type: string; payload: string | number; id: string }) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((s: { text: string; id: string }) => s.id !== action.payload);
//     default:
//       return state;
//   }
// };

const toDoReducer = createReducer([], {
  // deleteToDo: (state = [], action) => {
  //   console.log(state);
  //   return state.filter((s: { text: string; id: string }) => s.id !== action.payload);
  // },
  ["ADD"]: (state = [], action) => {
    console.log("state", state);
    console.log(action);
    // state.push({ text: action.text, id: Date.now() });
  },
});

export const actionCreators = {
  addToDo,
  deleteToDo,
};
export default toDoReducer;
