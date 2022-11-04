import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/actions";
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
  const newTodo = '';
  // Exercice utilise useSelector
  // const newTodo = useSelector()
  const items = useSelector(todosSelector).items;
  const dispatch = useDispatch();

  const handleNewTodoChange = (newTodo) => {
    // Exercice faire le dispatch de l'action
  };

  const handleAdd = () => {
    // Exercice faire le dispatch de l'action
  };

  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo))
  };

  return (
    <div className="Todos">
      <TodoForm
        newTodo={newTodo}
        onNewTodoChange={handleNewTodoChange}
        onAdd={handleAdd}
      />
      <TodosList items={items} onDelete={handleDelete} />
    </div>
  );
}

export default Todos;
