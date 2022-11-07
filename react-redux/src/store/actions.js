import { createAction } from '@reduxjs/toolkit';
// supprimer une todo du tableau

export const deleteTodo = createAction('@todos/delete');
export const inputChange = createAction('@todos/input-change');
export const addTodo = createAction('@todos/add');

// Exercice : prévoir 2 actions supplémentaire
// mettre à jour la valeur saisie dans le champ
// ajouter une todo au tableau
