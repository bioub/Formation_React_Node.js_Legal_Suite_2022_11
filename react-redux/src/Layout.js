import { Link, Outlet } from 'react-router-dom';

function Layout({  }) {
  return (
    <div className="Layout">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
