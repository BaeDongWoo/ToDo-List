import './CalendarBody.css';
const CalendarBody = ({ date }) => {
  const setCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
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
      calendar.push(
        <div className="week" key={key}>
          {new Date(year, month, i).getDate()}
        </div>
      );
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
