const PrintTodo = ({ todoList, setTodoList }) => {
  return (
    <div className="todo-list">
      <ul>
        {todoList.map((todo, idx) => (
          <li className="todo" key={idx}>
            <input type="checkbox" className="checkbox"></input>
            <div className="todo-title">{todo.title}</div>
            <button className="todo-delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PrintTodo;
