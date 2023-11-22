const PrintTodo = ({ todoList, setTodoList }) => {
  const deleteTodolist = (id) => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todo-list">
      <ul>
        {todoList.map((todo, idx) => (
          <li className="todo" key={idx} id={idx}>
            <input type="checkbox" className="checkbox"></input>
            <div className="todo-title" value={todo.title}>
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
