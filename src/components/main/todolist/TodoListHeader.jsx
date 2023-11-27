import { useState } from 'react';
import './TodoListHeader.css';
const TodoListHeader = ({ date, todoList, setTodoList }) => {
  const [inputTodo, setInputTodo] = useState('');
  const todoListHandler = () => {
    const todos = todoList.concat({ title: inputTodo, checked: false });
    setTodoList(
      todos.map((todo, idx) => {
        return { ...todo, id: idx };
      })
    );
    console.log(todoList);
    setInputTodo('');
  };
  const onChangeHandler = (e) => {
    setInputTodo(e.target.value);
  };
  return (
    <div className="todo-header">
      <h3 className="select-date">
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일
      </h3>
      <div className="add-todo">
        <input
          className="input-todo"
          type="text"
          placeholder="할일을 입력해주세요."
          onChange={onChangeHandler}
          value={inputTodo}
        ></input>
        <button
          type="button"
          className="add-todo-button"
          onClick={todoListHandler}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default TodoListHeader;
