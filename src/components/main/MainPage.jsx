import Calendar from './calendar/Calendar';
import TodoList from './todolist/TodoList';
import UserProfile from './userprofile/UserProfile';
import './MainPage.css';
import { useEffect, useState } from 'react';
import Header from '../form/Header';
import { DateFormat } from '../form/DateFormat';
const MainPage = () => {
  const [date, setDate] = useState(new Date());
  const [todoList, setTodoList] = useState([]);
  const [allTodoList, setAllTodoList] = useState([
    {
      date: '2023-11-27',
      todoList: [
        { title: '코테 풀기', checked: true, id: 0 },
        { title: '리액트 강의 듣기', checked: false, id: 1 },
        { title: '프로젝트 회의', checked: false, id: 2 },
      ],
    },
    {
      date: '2023-11-28',
      todoList: [
        { title: '정처기 공부하기', checked: false, id: 0 },
        { title: '블로그 글쓰기', checked: true, id: 1 },
        { title: '버그 수정하기', checked: false, id: 2 },
      ],
    },
  ]);
  useEffect(() => {
    const dateFormat = DateFormat(date);
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
