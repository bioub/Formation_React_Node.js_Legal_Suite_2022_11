import TodoItem from "./TodoItem";

function TodosList({ items = [], onDelete }) {
  // [
  //   {
  //     id: Math.random(),
  //     title: "ABC",
  //     completed: true,
  //   }, -> <TodoItem key={item.id} todo={item} />
  //   {
  //     id: Math.random(),
  //     title: "DEF",
  //     completed: false,
  //   }, -> <TodoItem key={item.id} todo={item} />
  // ]
  return (
    <div className="TodosList">
      {items.map((item) => <TodoItem key={item._id} todo={item} onDelete={onDelete} />)}
    </div>
  );
}

export default TodosList;
