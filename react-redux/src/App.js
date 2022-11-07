import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";
import Todos from "./todos/Todos";
import Users from "./users/Users";
import UserAdd from "./users/UserAdd";
import UserDetails from "./users/UserDetails";

// const router = createBrowserRouter([
// {
//   path: '/',
//   element: <Home />
// },
// {
//   path: '/about',
//   element: <About />
// }
// ]);
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "todos",
        element: <Todos />,
      },
      {
        path: "users",
        element: <Users />,
        children: [
          {
            path: "add",
            element: <UserAdd />,
          },
          {
            path: ":userId",
            element: <UserDetails />,
          },
        ],
      },
    ],
  },
]);

/*
Exercice React Router
- Créer 3 composants : Users, UserAdd, UserDetails
- Au niveau des routes Home About ajouter une route pour accéder à Users via l'url /users
- Dans le composant Users, ajouter une liste de lien :
Add -> /users/add
User 1 -> /users/1
User 2 -> /users/2
et un Outlet pour afficher les pages enfant de Users
- Au niveau de la route Users, ajouter une clé children pour créer les routes
/users/add -> UserAdd
/users/:userId -> UserDetails
*/

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
