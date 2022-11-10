import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUser, postUserSuccess } from "../store/actions";

function UserAdd({}) {
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(postUser());
    fetch("http://localhost:4000/api/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(postUserSuccess(data));
        navigate("/users/" + data._id);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        Username:
        <input {...register("username", { required: true })} />
        {errors.username && <span>Username is required</span>}
      </p>

      <p>
        Password:
        <input type="password" {...register("password", { required: true })} />
        {errors.username && <span>Username is required</span>}
      </p>

      <p>
        Active:
        <input type="checkbox" defaultChecked {...register("active")} />
      </p>

      <button>Register</button>
    </form>
  );
}

export default UserAdd;
