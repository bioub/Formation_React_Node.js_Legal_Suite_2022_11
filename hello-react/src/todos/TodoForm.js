function TodoForm({ newTodo, onNewTodoChange, onAdd }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd();
  };

  const handleChange = (event) => {
    onNewTodoChange(event.target.value);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
