import { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import './Calendar.css';
import CalendarDays from './CalendarDays';
import CalendarBody from './CalendarBody';
const Calendar = ({ date, setDate, allTodoList, setTodoList }) => {
  return (
    <div className="calendar">
      <CalendarHeader date={date} setDate={setDate} />
      <CalendarDays />
      <CalendarBody
        date={date}
        setDate={setDate}
        allTodoList={allTodoList}
        setTodoList={setTodoList}
      />
    </div>
  );
};
export default Calendar;
