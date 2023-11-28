import Calendar from './calendar/Calendar';
import TodoList from './todolist/TodoList';
import UserProfile from './userprofile/UserProfile';
import './MainPage.css';
import { useEffect, useState } from 'react';
import Header from '../form/Header';
const MainPage = () => {
  const [date, setDate] = useState(new Date());
  const [todoList, setTodoList] = useState([]);
  const [allTodoList, setAllTodoList] = useState([]);
  useEffect(() => {
    const tempY = date.getFullYear();
    const tempM = date.getMonth();
    const tempD = date.getDate();
    const dateFormat = [tempY, tempM + 1, tempD].join('-');
    const todoListForDate = allTodoList.find(
      (item) => item.date === dateFormat
    );
    if (todoListForDate) {
      setTodoList(todoListForDate.todoList);
    } else {
      setTodoList([]);
    }
  }, [date, allTodoList]);
  return (
    <div className="main-page">
      <Header />
      <div className="main">
        <div className="profile-calendar">
          <Calendar
            date={date}
            setDate={setDate}
            allTodoList={allTodoList}
            setTodoList={setTodoList}
          />
        </div>
        <div className="todo-form">
          <TodoList
            date={date}
            allTodoList={allTodoList}
            todoList={todoList}
            setTodoList={setTodoList}
            setAllTodoList={setAllTodoList}
          />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
