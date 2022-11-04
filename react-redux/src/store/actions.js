import { createAction } from '@reduxjs/toolkit';
// supprimer une todo du tableau

export const deleteTodo = createAction('@todos/delete');

// Exercice : prévoir 2 actions supplémentaire
// mettre à jour la valeur saisie dans le champ
// ajouter une todo au tableau
