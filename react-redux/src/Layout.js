import './Layout.css';
import { Link, Outlet } from 'react-router-dom';

function Layout({  }) {
  return (
    <div className="Layout">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/users">Users</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
