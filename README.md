# TP Node.js + React

En vous inspirant de ce qui a été fait avec `Todo` dans les projets `Express` et `react-redux` vous aller faire de même avec l'entité `User`.

## Node.js

Créer un nouveau model `User` dans `Express/models/user.js` avec 3 champs :

- `username` de type `String` (obligatoire)
- `password` de type `String` (obligatoire)
- `active` de type `Boolean` (optionnel, défault true)

Dans `Express/controllers/user.js` :

- créer 3 fonction comme pour todos :
    - `list` (ne pas renvoyer `password`)
    - `show` (ne pas renvoyer `password`)
    - `add`
- modifier la fonction `login` pour qu'elle vérifie le username et password avec MongoDB.

Dans `Express/routes/user.js` créer 3 nouvelles routes pour accéder au controller :

- `GET /api/users` -> `list`
- `POST /api/users` -> `add`
- `GET /api/users/:userId` -> `show`

## React / Redux

Dans le fichier `react-redux/src/store/reducers`, ajouter dans `initialState` :

```js
const initialState = {
  users: {
    loading: false,
    items: [],
  },
  todos: {
    /* ... */
  },
};
```

Créer ensuite les actions `fetchUsers`, `fetchUsersSuccess`, `postUser`, `postUserSuccess` dans `react-redux/src/store/actions`.

Dans `react-redux/src/store/reducers` traiter ces actions dans un nouveau reducer `usersReducer` que vous penserez à enregistrer dans `react-redux/src/index.js`

Créer un sélecteur dans `react-redux/src/store/selectors` pour retrouver la clé `users` du state.

Dans le composant `react-redux/src/users/Users`, utiliser `useEffect` et `dispatch` pour requêter la liste des users.

Avec `useSelector`, récupérer les données du state et les afficher à la place de :

```jsx
<li>
    <Link to="1">User 1</Link>
</li>
<li>
    <Link to="2">User 2</Link>
</li>
```

Dans le composant `UserDetails` utiliser le même sélecteur que dans `Users.js`

Utiliser le hooks `useParams` de React Router pour récupérer l'id du user dans l'URL et afficher votre User : [https://reactrouter.com/en/main/hooks/use-params](https://reactrouter.com/en/main/hooks/use-params)

Dans le composant `UserAdd` créer un formulaire et utiliser les actions `postUser` et `postUserSuccess` pour créer l'utilisateur en base. Une fois l'utilisateur créé, utiliser `useNavigate` et rediriger vers le composant `UserDetails` avec l'id de l'utilisateur qui vient d'être créé : [https://reactrouter.com/en/main/hooks/use-navigate](https://reactrouter.com/en/main/hooks/use-navigate)
