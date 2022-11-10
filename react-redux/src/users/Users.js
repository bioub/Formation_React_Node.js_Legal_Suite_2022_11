import "./Users.css";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../store/selectors";
import { useEffect } from "react";
import { fetchAllUsers, fetchAllUsersSuccess } from "../store/actions";

function Users({}) {
  const dispatch = useDispatch();
  const { loading, items } = useSelector(usersSelector);

  useEffect(() => {
    dispatch(fetchAllUsers());
    fetch("http://localhost:4000/api/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchAllUsersSuccess(data));
      });
  }, [dispatch]);

  return (
    <div className="Users">
      <ul>
        <li>
          <Link to="add">Add</Link>
        </li>
        {loading && <li>Loading...</li>}
        {items.map((item) => (
          <li key={item._id}>
            <Link to={item._id}>{item.username}</Link>
          </li>
        ))}
      </ul>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Users;
