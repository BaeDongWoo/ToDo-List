import { useSelector } from 'react-redux';
import './CalendarHeader.css';
import { useDispatch } from 'react-redux';

const CalendarHeader = ({ date, setDate }) => {
  const dispatch = useDispatch();
  const monthHandler = (e) => {
    if (e.target.className === 'prev-month') {
      dispatch(
        setDate(
          new Date(date.getFullYear(), date.getMonth() - 1, date.getDate())
        )
      );
    } else {
      dispatch(
        setDate(
          new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
        )
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
