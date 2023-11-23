import { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import './Calendar.css';
import CalendarDays from './CalendarDays';
import CalendarBody from './CalendarBody';
const Calendar = ({ date, setDate }) => {
  return (
    <div className="calendar">
      <CalendarHeader date={date} setDate={setDate} />
      <CalendarDays />
      <CalendarBody date={date} setDate={setDate} />
    </div>
  );
};
export default Calendar;