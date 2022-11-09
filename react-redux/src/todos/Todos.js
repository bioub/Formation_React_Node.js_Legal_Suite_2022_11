import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, fetchAllTodos, fetchAllTodosSuccess, inputChange } from "../store/actions";
import { todosSelector } from "../store/selectors";
import TodoForm from "./TodoForm";
import TodosList from "./TodosList";

/*
function Todos() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      title: "ABC",
      completed: true,
    },
    {
      id: Math.random(),
      title: "DEF",
      completed: false,
    },
  ]);
  const [newTodo, setNewTodo] = useState("Acheter du p");

  const handleAdd = () => {
    setTodos([
      ...todos,
      { id: Math.random(), title: newTodo, completed: false },
    ]);
    setNewTodo('');
  };

  const handleDelete = (todo) => {
    setTodos(todos.filter((item) => todo.id !== item.id));
  };

  return (
    <div className="Todos">
      <TodoForm
        newTodo={newTodo}
        onNewTodoChange={(newTodo) => setNewTodo(newTodo)}
        onAdd={handleAdd}
      />
      <TodosList items={todos} onDelete={handleDelete} />
    </div>
  );
}
*/
function Todos() {
  const { newTodo, items, loading } = useSelector(todosSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('componentDidMount');
    // const request = new Request();
    // fetch(request)

    // fetch('http://localhost:4000/api/todos', {method: 'GET'});

    dispatch(fetchAllTodos());
    // Si requete basiques de type GET le plus court :
    fetch('http://localhost:4000/api/todos')
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchAllTodosSuccess(data));
      });

    return () => {
      console.log('componentWillUnmount');
    };
  }, [dispatch]);

  const handleNewTodoChange = (newTodo) => {
    dispatch(inputChange(newTodo));
  };

  const handleAdd = () => {
    dispatch(addTodo({ id: Math.random(), title: newTodo, completed: false }));

    // Exercice
    // Utiliser fetch sous la forme fetch(url, { method: 'POST', body: JSON.stringify(LA TODO A INSERER), headers: { 'Content-type': 'application/json' } })
  };

  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo));

    // Exercice Optionnel
    // Faire de même avec le delete de la todo
  };

  return (
    <div className="Todos">
      <TodoForm
        newTodo={newTodo}
        onNewTodoChange={handleNewTodoChange}
        onAdd={handleAdd}
      />
      {loading && <p>Loading... </p>}
      <TodosList items={items} onDelete={handleDelete} />
    </div>
  );
}

export default Todos;
