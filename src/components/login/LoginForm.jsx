import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../form/Header';
import { useDispatch } from 'react-redux';
import { setAllTodoList, setTodoList, setUserInfo } from '../reducer/Action';
import { DateFormat } from '../form/DateFormat';
import { useSelector } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, fireStore } from '../config/firebaseConfig';
import ErrorHandler from '../error/errorHander';
import { collection, getDocs, query } from 'firebase/firestore';
import { getData } from '../firebasestore/Data';
const LoginForm = () => {
  const date = useSelector((state) => state.date);
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();
  const signUpPage = () => {
    nav('/signUp');
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, userEmail, password);
      const uid = user.user.uid;
      sessionStorage.setItem('userInfo', JSON.stringify(uid));
      dispatch(setUserInfo(uid));
      const allList = await getData();
      dispatch(setAllTodoList(allList));
      const dateFormat = DateFormat(date);
      const todoListForDate = allList.find((item) => item.date === dateFormat);
      if (todoListForDate) {
        dispatch(setTodoList(todoListForDate.todoList));
      } else {
        dispatch(setTodoList([]));
      }
      nav('/MainPage');
    } catch (error) {
      console.error(error);
      ErrorHandler(error);
    }
  };
  return (
    <div className="login-container">
      <Header />
      <div className="login-wrapper">
        <h2>지금 바로 일정을 등록해 보세요!</h2>
        <form method="post" id="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="이메일을 입력해 주세요"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          ></input>
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <input type="submit" value="로그인"></input>
          <input type="button" value="회원가입" onClick={signUpPage}></input>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
