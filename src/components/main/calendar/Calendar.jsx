import CalendarHeader from './CalendarHeader';
import './Calendar.css';
import CalendarDays from './CalendarDays';
import CalendarBody from './CalendarBody';
import { setDate } from '../../reducer/Action';
const Calendar = ({ date }) => {
  return (
    <div className="calendar">
      <CalendarHeader date={date} setDate={setDate} />
      <CalendarDays />
      <CalendarBody date={date} setDate={setDate} />
    </div>
  );
};
export default Calendar;
