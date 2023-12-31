import { useState } from 'react';
import './TodoListHeader.css';
import { useDispatch } from 'react-redux';
const TodoListHeader = ({ date, todoList, setTodoList }) => {
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState('');
  const todoListHandler = () => {
    if (inputTodo.trim() === '') {
      setInputTodo('');
      return alert('할일을 입력해주세요');
    }
    const todos = todoList.concat({ title: inputTodo, checked: false });
    dispatch(
      setTodoList(
        todos.map((todo, idx) => {
          return { ...todo, id: idx };
        })
      )
    );
    setInputTodo('');
  };
  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      todoListHandler();
    }
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
          onKeyDown={onKeyDownHandler}
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
