import { createReducer } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, inputChange } from "./actions";

const initialState = {
  todos: {
    newTodo: "Acheter du p",
    items: [
      {
        id: Math.random(),
        title: "ABC",
        completed: true,
      },
      {
        id: Math.random(),
        title: "DEF",
        completed: false,
      },
    ],
  },
};

// return {
//   ...state,
//   todos: {
//     ...state.todos,
//     items: [
//       ...state.todos.items,
//       todo
//     ]
//   }
// };

export const todosReducer = createReducer(initialState.todos, (builder) => {
  builder
    .addCase(deleteTodo, (state, action) => {
      const index = state.items.findIndex((el) => el.id === action.payload.id);
      state.items.splice(index, 1);
      return state;
    })
    .addCase(addTodo, (state, action) => {
      state.items.push(action.payload);
      state.newTodo = '';
      return state;
    })
    .addCase(inputChange, (state, action) => {
      state.newTodo = action.payload;
      return state;
    });
});
