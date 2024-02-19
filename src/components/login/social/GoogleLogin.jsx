import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  setAllTodoList,
  setDate,
  setTodoList,
  setUserInfo,
} from '../../reducer/Action';
import { getData } from '../../firebasestore/Data';
import { DateFormat } from '../../form/DateFormat';
import ErrorHandler from '../../error/errorHander';
import { useNavigate } from 'react-router-dom';
const GoogleLogin = () => {
  const nav = useNavigate();
  const auth = getAuth();
  const uid = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const googleAuthHandler = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const user = await signInWithPopup(auth, provider);
      const userInfo = user.user.uid;
      dispatch(setUserInfo(userInfo));
      const allList = await getData(userInfo);
      dispatch(setAllTodoList(allList));
      const dateFormat = DateFormat(new Date());
      dispatch(setDate(dateFormat));
      const todoListForDate = allList.find((item) => item.date === dateFormat);
      if (todoListForDate) {
        dispatch(setTodoList(todoListForDate.todoList));
      } else {
        dispatch(setTodoList([]));
      }
      nav('/MainPage');
    } catch (error) {
      ErrorHandler(error);
    }
  };
  return (
    <>
      <img src="google_icon2.png" onClick={googleAuthHandler}></img>
    </>
  );
};
export default GoogleLogin;
