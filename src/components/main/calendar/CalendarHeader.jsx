import './CalendarHeader.css';
const CalendarHeader = ({ date, setDate }) => {
  const monthHandler = (e) => {
    if (e.target.className === 'prev-month') {
      setDate(
        new Date(date.getFullYear(), date.getMonth() - 1, date.getDate())
      );
    } else {
      setDate(
        new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
      );
    }
  };
  return (
    <div className="calendar-header">
      <button type="button" className="prev-month" onClick={monthHandler}>
        {'<'}
      </button>
      <div className="yearAndMonth">
        <h3 className="year">{date.getFullYear()}년</h3>
        <div className="month">{date.getMonth() + 1}월</div>
      </div>
      <button type="button" className="next-month" onClick={monthHandler}>
        {'>'}
      </button>
    </div>
  );
};
export default CalendarHeader;
