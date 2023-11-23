import { useState } from 'react';

const PrintTodo = ({ todoList, setTodoList }) => {
  const [grab, setGrab] = useState(null);
  const _onDragOver = (e) => {
    e.preventDefault();
  };

  const _onDragStart = (e) => {
    setGrab(e.target);
    e.target.classList.add('grabbing');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target);
  };

  const _onDragEnd = (e) => {
    e.target.classList.remove('grabbing');
    e.dataTransfer.dropEffect = 'move';
  };

  const _onDrop = (e) => {
    let grabPosition = grab.id;
    let targetPosition = e.target.id;
    let _list = [...todoList];
    _list[grabPosition] = _list.splice(
      targetPosition,
      1,
      _list[grabPosition]
    )[0];

    setTodoList(
      _list.map((todo, idx) => {
        return { ...todo, id: idx };
      })
    );
    console.log(todoList);
  };

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
          <li
            className="todo"
            key={idx}
            id={idx}
            draggable
            onDragOver={_onDragOver}
            onDragStart={_onDragStart}
            onDragEnd={_onDragEnd}
            onDrop={_onDrop}
          >
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
              id={idx}
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
