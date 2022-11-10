import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { usersSelector } from "../store/selectors";

function UserDetails({  }) {
  const { loading, items } = useSelector(usersSelector);
  const { userId } = useParams();

  if (loading) {
    return null;
  }

  const user = items.find((item) => item._id === userId);

  if (!user) {
    return null;
  }

  return (
    <div className="UserDetails">
      <p>Id : {user._id}</p>
      <p>Username : {user.username}</p>
      <p>Status : {user.active ? 'Active' : 'Not active'}</p>
    </div>
  );
}

export default UserDetails;
