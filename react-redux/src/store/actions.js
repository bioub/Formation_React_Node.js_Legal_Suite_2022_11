import { createAction } from '@reduxjs/toolkit';

// export const deleteTodo = createAction('@todos/delete');
export const inputChange = createAction('@todos/input-change');
// export const addTodo = createAction('@todos/add');

// fetch la liste de todos
export const fetchAllTodos = createAction('@todos/fetchAll');
export const fetchAllTodosSuccess = createAction('@todos/fetchAll/success');

// Exercice
// Prévoir 2 actions pour la création d'une todos
// postTodo et postTodoSuccess

export const postTodo = createAction('@todos/post');
export const postTodoSuccess = createAction('@todos/post/success');


export const deleteTodo = createAction('@todos/delete');
export const deleteTodoSuccess = createAction('@todos/delete/success');


export const fetchAllUsers = createAction('@users/fetchAll');
export const fetchAllUsersSuccess = createAction('@users/fetchAll/success');

export const postUser = createAction('@users/post');
export const postUserSuccess = createAction('@users/post/success');
