import './CalendarDays.css';
const CalendarDays = () => {
  const days = [];
  const day = ['일', '월', '화', '수', '목', '금', '토'];
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
