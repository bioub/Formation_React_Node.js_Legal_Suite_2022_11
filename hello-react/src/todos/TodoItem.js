function TodoItem({ todo, onDelete }) {
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={todo.completed} />
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo)}>-</button>
    </div>
  );
}

export default TodoItem;
