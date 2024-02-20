import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  setAllTodoList,
  setDate,
  setTodoList,
  setUserInfo,
} from '../../../reducer/Action';
import { getData } from '../../../firebasestore/Data';
import { useDispatch } from 'react-redux';
import { DateFormat } from '../../../form/DateFormat';

const NaverLogin = () => {
  const { naver } = window;
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  //   const NAVER_CALLBACK_URL = 'http://localhost:3000/login'; //로컬용
  const NAVER_CALLBACK_URL = 'https://bdw-my-todo.vercel.app/login'; //배포용
  const nav = useNavigate();
  const dispatch = useDispatch();
  const NaverLoginInit = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: 'green', type: 1, height: 60 },
      callbackHandle: true,
    });
    naverLogin.init();
    const getUser = async () => {
      await naverLogin.getLoginStatus(async (status) => {
        if (status) {
          const userInfo = naverLogin.user.id;
          dispatch(setUserInfo(naverLogin.user.id));
          const allList = await getData(userInfo);
          dispatch(setAllTodoList(allList));
          const dateFormat = DateFormat(new Date());
          dispatch(setDate(dateFormat));
          const todoListForDate = allList.find(
            (item) => item.date === dateFormat
          );
          if (todoListForDate) {
            dispatch(setTodoList(todoListForDate.todoList));
          } else {
            dispatch(setTodoList([]));
          }
          nav('/MainPage');
        }
      });
    };
    getUser();
  };
  useEffect(() => {
    NaverLoginInit();
  });
  return (
    <>
      <div>
        <div id="naverIdLogin"></div>
      </div>
    </>
  );
};
export default NaverLogin;
