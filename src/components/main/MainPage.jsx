import Calendar from './calendar/Calendar';
import TodoList from './todolist/TodoList';
import UserProfile from './userprofile/UserProfile';
import './MainPage.css';
import { useState } from 'react';
import Header from '../form/Header';
const MainPage = () => {
  const [date, setDate] = useState(new Date());
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
  console.log(allTodoList);
  return (
    <div className="main-page">
      <Header />
      <div className="main">
        <div className="profile-calendar">
          <Calendar date={date} setDate={setDate} allTodoList={allTodoList} />
        </div>
        <div className="todo-form">
          <TodoList date={date} />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
