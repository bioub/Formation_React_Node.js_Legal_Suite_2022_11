import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Layout from './Layout';

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
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
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
