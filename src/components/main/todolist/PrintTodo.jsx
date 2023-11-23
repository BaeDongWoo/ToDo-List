const PrintTodo = ({ todoList, setTodoList }) => {
  const deleteTodolist = (id) => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  };
  const toggleChecked = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  return (
    <div className="todo-list">
      <ul>
        {todoList.map((todo, idx) => (
          <li className="todo" key={idx} id={idx}>
            <input
              type="checkbox"
              className="checkbox"
              checked={todo.checked}
              onChange={() => toggleChecked(todo.id)}
            ></input>
            <div
              className={
                todo.checked === false ? 'todo-title' : 'todo-title-checked'
              }
              value={todo.title}
            >
              {todo.title}
            </div>
            <button
              className="todo-delete-btn"
              onClick={() => deleteTodolist(todo.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PrintTodo;
