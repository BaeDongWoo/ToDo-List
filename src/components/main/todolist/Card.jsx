import { useDispatch } from 'react-redux';
import './Card.css';
import { useSelector } from 'react-redux';
const Card = ({ todo, setTodoList, provided }) => {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const deleteTodolist = (id) => {
    const filterTodos = todoList.filter((todo) => todo.id !== id);
    dispatch(setTodoList(filterTodos));
  };

  const toggleChecked = (id) => {
    const checkTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    dispatch(setTodoList(checkTodos));
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
