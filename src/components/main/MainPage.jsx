import Calendar from './calendar/Calendar';
import TodoList from './todolist/TodoList';
import UserProfile from './userprofile/UserProfile';
import './MainPage.css';
import { useState } from 'react';
import Header from '../form/Header';
const MainPage = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="main-page">
      <Header />
      <div className="main">
        <div className="profile-calendar">
          <Calendar date={date} setDate={setDate} />
        </div>
        <div className="todo-form">
          <TodoList date={date} />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
