import { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import './Calendar.css';
import CalendarDays from './CalendarDays';
import CalendarBody from './CalendarBody';
const Calendar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="calendar">
      <CalendarHeader date={date} setDate={setDate} />
      <CalendarDays />
      <CalendarBody date={date} />
    </div>
  );
};
export default Calendar;
