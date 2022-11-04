import { createReducer } from '@reduxjs/toolkit';
import { deleteTodo } from './actions';

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
}

export const todosReducer = createReducer(initialState.todos, (builder) => {

  builder.addCase(deleteTodo, (state, action) => {
    const index = state.items.findIndex((el) => el.id === action.payload.id);
    state.items.splice(index, 1);

    return state;
  });
  // Exercice : prévoir le traitement des 2 actions supplémentaire
  // mettre à jour la valeur saisie dans le champ
  // ajouter une todo au tableau
});
