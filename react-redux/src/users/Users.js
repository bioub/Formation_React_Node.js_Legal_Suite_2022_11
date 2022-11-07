import './Users.css'
import { Link, Outlet } from "react-router-dom";

function Users({}) {
  return (
    <div className="Users">
      <ul>
        <li>
          <Link to="add">Add</Link>
        </li>
        <li>
          <Link to="1">User 1</Link>
        </li>
        <li>
          <Link to="2">User 2</Link>
        </li>
      </ul>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Users;
