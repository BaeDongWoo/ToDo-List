import './CalendarDays.css';
const CalendarDays = () => {
  const days = [];
  const day = ['월', '화', '수', '목', '금', '토', '일'];
  day.map((d, idx) => {
    days.push(
      <div className="day" key={idx}>
        {d}
      </div>
    );
  });
  return <div className="days">{days}</div>;
};
export default CalendarDays;
