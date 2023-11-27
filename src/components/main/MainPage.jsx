import Calendar from './calendar/Calendar';
import TodoList from './todolist/TodoList';
import UserProfile from './userprofile/UserProfile';
import './MainPage.css';
import { useEffect, useState } from 'react';
import Header from '../form/Header';
const MainPage = () => {
  const [date, setDate] = useState(new Date());
  const [todoList, setTodoList] = useState([]);
  const [allTodoList, setAllTodoList] = useState([
    {
      date: '2023-11-27',
      todoList: [
        { title: '배추 밥주기', id: 0, checked: true },
        { title: '짱아 밥주기', id: 1, checked: false },
        { title: '동우 밥주기', id: 2, checked: false },
      ],
    },
    {
      date: '2023-11-28',
      todoList: [
        { title: '배추 밥주기', id: 0, checked: false },
        { title: '짱아 밥주기', id: 1, checked: true },
        { title: '동우 밥주기', id: 2, checked: false },
      ],
    },
  ]);
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
          />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
