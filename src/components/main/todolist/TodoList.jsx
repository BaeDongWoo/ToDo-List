import { useState } from 'react';
import './TodoList.css';
import TodoListHeader from './TodoListHeader';
import PrintTodo from './PrintTodo';
const TodoList = ({ date, todoList, setTodoList }) => {
  return (
    <div className="todo-list-form">
      <TodoListHeader
        date={date}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <div className="todo-list-body">
        <PrintTodo todoList={todoList} setTodoList={setTodoList} />
      </div>
      <div className="todo-list-footer">
        <button className="save-btn">저장하기</button>
      </div>
    </div>
  );
};
export default TodoList;
