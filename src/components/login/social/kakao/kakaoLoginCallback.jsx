import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorHandler from '../../../error/errorHander';
import { useDispatch } from 'react-redux';
import {
  setAllTodoList,
  setDate,
  setTodoList,
  setUserInfo,
} from '../../../reducer/Action';
import { getData } from '../../../firebasestore/Data';
import { DateFormat } from '../../../form/DateFormat';

const KakaoLoginCallback = () => {
  const CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const REDIRECT_URL = 'https://bdw-my-todo.vercel.app/kakao-auth';
  const nav = useNavigate();
  const dispatch = useDispatch();
  const code = new URL(window.location.href).searchParams.get('code');
  const getToken = async () => {
    try {
      const res = await axios.get(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&code=${code}`,
        {},
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      );
      getUserData(res.data.access_token);
    } catch (error) {
      ErrorHandler(error);
    }
  };
  const getUserData = async (access_token) => {
    const user = await axios.post(
      `https://kapi.kakao.com/v2/user/me`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }
    );
    const userInfo = user.data.id.toString();
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
  };
  useEffect(() => {
    getToken();
  });
  return <></>;
};
export default KakaoLoginCallback;
