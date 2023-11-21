import { useState } from 'react';
import './CalendarHeader.css';
const CalendarHeader = () => {
  const [month, setMonth] = useState(new Date());
  const monthHandler = (e) => {
    console.log(e.target.className);
    if (e.target.className === 'prev-month') {
      setMonth(
        new Date(month.getFullYear(), month.getMonth() - 1, month.getDate())
      );
    } else {
      setMonth(
        new Date(month.getFullYear(), month.getMonth() + 1, month.getDate())
      );
    }
  };
  return (
    <div className="calendar-header">
      <button type="button" className="prev-month" onClick={monthHandler}>
        {month.getMonth()}
      </button>
      <div className="year">{month.getFullYear()}&nbsp;</div>
      <div className="month">{month.getMonth() + 1}월</div>
      <button type="button" className="next-month" onClick={monthHandler}>
        {month.getMonth() + 2}
      </button>
    </div>
  );
};
export default CalendarHeader;
