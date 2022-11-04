import { useState } from "react";
import TodoForm from "./TodoForm";
import TodosList from "./TodosList";

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

export default Todos;
