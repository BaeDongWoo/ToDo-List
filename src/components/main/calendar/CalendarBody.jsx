import { useState } from 'react';
import './CalendarBody.css';
const CalendarBody = ({ date, setDate, allTodoList, setTodoList }) => {
  const [selectCell, setSelectCell] = useState(date.getDate());
  const year = date.getFullYear();
  const month = date.getMonth();
  const selectHandeler = (i) => {
    setDate(new Date(year, month, i));
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
      const tempY = tempDate.getFullYear();
      const tempM = tempDate.getMonth();
      const tempD = tempDate.getDate();
      const dateFormat = [tempY, tempM + 1, tempD].join('-');
      const todoListForDate = allTodoList.find(
        (item) => item.date === dateFormat
      );
      if (selectCell === i) {
        calendar.push(
          <div
            className="week select"
            key={key}
            onClick={() => selectHandeler(i)}
            value={tempD}
          >
            {tempD}
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
            onClick={() => selectHandeler(i)}
            value={tempD}
          >
            {tempD}
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
