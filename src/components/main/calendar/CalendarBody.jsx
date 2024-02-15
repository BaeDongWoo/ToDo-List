import { useState } from 'react';
import './CalendarBody.css';
import { DateFormat } from '../../form/DateFormat';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const CalendarBody = ({ date, setDate }) => {
  const allTodoList = useSelector((state) => state.allTodoList);
  const dispatch = useDispatch();
  const [selectCell, setSelectCell] = useState(date.getDate());
  const year = date.getFullYear();
  const month = date.getMonth();
  const selectHandeler = (i) => {
    dispatch(setDate(new Date(year, month, i)));
    setSelectCell(i);
  };
  const setCalendar = () => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    let key = 1;
    let calendar = [];
    for (let i = startDay - 1; i >= 0; i--) {
      calendar.push(
        <div className="prev-week" key={key}>
          {new Date(year, month - 1, daysInPrevMonth - i).getDate()}
        </div>
      );
      key += 1;
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const tempDate = new Date(year, month, i);
      const dateFormat = DateFormat(tempDate);
      const todoListForDate = allTodoList.find(
        (item) => item.date === dateFormat
      );
      if (selectCell === i) {
        calendar.push(
          <div
            className="week select"
            key={key}
            onClick={(e) => selectHandeler(i)}
            value={i}
          >
            {i}
            {todoListForDate && (
              <ul className="all-todo-list">
                {todoListForDate.todoList.map((todo) => (
                  <li
                    className={`${
                      todo.checked ? 'all-todo-select' : 'all-todo'
                    }`}
                    key={todo.id}
                  >
                    {todo.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      } else {
        calendar.push(
          <div
            className="week"
            key={key}
            onClick={(e) => selectHandeler(i)}
            value={i}
          >
            {i}
            {todoListForDate && (
              <ul className="all-todo-list">
                {todoListForDate.todoList.map((todo) => (
                  <li
                    className={`${
                      todo.checked ? 'all-todo-select' : 'all-todo'
                    }`}
                    key={todo.id}
                  >
                    {todo.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }
      key += 1;
    }
    const daysInNextMonth = 7 - (calendar.length % 7);
    for (let i = 1; i <= daysInNextMonth + 7; i++) {
      if (calendar.length === 42) break;
      calendar.push(
        <div className="next-week" key={key}>
          {new Date(year, month + 1, i).getDate()}
        </div>
      );
      key += 1;
    }
    return calendar;
  };
  const calendarBody = setCalendar();
  return <div className="body">{calendarBody.map((day) => day)}</div>;
};
export default CalendarBody;
