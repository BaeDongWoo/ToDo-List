import Calendar from './calendar/Calendar';
import TodoList from './todolist/TodoList';
import './MainPage.css';
import { useEffect } from 'react';
import Header from '../form/Header';
import { DateFormat } from '../form/DateFormat';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setTodoList } from '../reducer/Action';
const MainPage = () => {
  const date = useSelector((state) => state.date);
  const allTodoList = useSelector((state) => state.allTodoList);
  const dispatch = useDispatch();
  useEffect(() => {
    const dateFormat = DateFormat(date);
    const todoListForDate = allTodoList.find(
      (item) => item.date === dateFormat
    );
    if (todoListForDate) {
      dispatch(setTodoList(todoListForDate.todoList));
    } else {
      dispatch(setTodoList([]));
    }
  }, [date, allTodoList]);
  return (
    <div className="main-page">
      <Header />
      <div className="main">
        <div className="profile-calendar">
          <Calendar date={date} />
        </div>
        <div className="todo-form">
          <TodoList
            date={date}
            allTodoList={allTodoList}
            setTodoList={setTodoList}
          />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
