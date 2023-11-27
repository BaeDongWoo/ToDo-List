import './Card.css';
const Card = ({ todo, setTodoList, provided }) => {
  const deleteTodolist = (id) => {
    setTodoList((todos) => todos.filter((todo) => todo.id !== id));
  };

  const toggleChecked = (id) => {
    setTodoList((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  return (
    <li
      className="todo"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.checked}
        onChange={() => toggleChecked(todo.id)}
      />
      <h2 className={todo.checked ? 'todo-title-checked' : 'todo-title'}>
        {todo.title}
      </h2>
      <button
        className="todo-delete-btn"
        onClick={() => deleteTodolist(todo.id)}
      >
        x
      </button>
    </li>
  );
};
export default Card;
