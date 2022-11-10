import { createReducer } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, deleteTodoSuccess, fetchAllTodos, fetchAllTodosSuccess, inputChange, postTodo, postTodoSuccess } from "./actions";

const initialState = {
  todos: {
    loading: false,
    newTodo: "",
    items: [
      // {
      //   id: Math.random(),
      //   title: "ABC",
      //   completed: true,
      // },
      // {
      //   id: Math.random(),
      //   title: "DEF",
      //   completed: false,
      // },
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
    // .addCase(deleteTodo, (state, action) => {
    //   const index = state.items.findIndex((el) => el.id === action.payload.id);
    //   state.items.splice(index, 1);
    //   return state;
    // })
    // .addCase(addTodo, (state, action) => {
    //   state.items.push(action.payload);
    //   state.newTodo = '';
    //   return state;
    // })
    .addCase(inputChange, (state, action) => {
      state.newTodo = action.payload;
      return state;
    })
    .addCase(fetchAllTodos, (state, action) => {
      state.loading = true;
      state.items = [];
      return state;
    })
    .addCase(fetchAllTodosSuccess, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      return state;
    })
    .addCase(postTodo, (state, action) => {
      state.loading = true;
      return state;
    })
    .addCase(postTodoSuccess, (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
      return state;
    })
    .addCase(deleteTodo, (state, action) => {
      state.loading = true;
      return state;
    })
    .addCase(deleteTodoSuccess, (state, action) => {
      const index = state.items.findIndex((el) => el._id === action.payload._id);
      state.items.splice(index, 1);
      state.loading = false;
      return state;
    })
    // Exercice
    // traiter les 2 actions (agir sur loading et items)
});
