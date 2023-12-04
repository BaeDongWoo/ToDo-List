import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../form/Header';
import { useDispatch } from 'react-redux';
import { setAllTodoList, setTodoList, setUserInfo } from '../reducer/Action';
import { DateFormat } from '../form/DateFormat';
import { useSelector } from 'react-redux';
const LoginForm = () => {
  const date = useSelector((state) => state.date);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();
  const signUpPage = () => {
    nav('/signUp');
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3005/login', {
        userId,
        password,
      });
      // 서버에서의 응답을 확인하고 처리
      if (response.data.userInfo) {
        const userInfo = response.data.userInfo;
        const header = response.headers.get('Authorization');
        const token = header.slice(7);
        dispatch(setUserInfo(userInfo));
        sessionStorage.setItem('token', JSON.stringify(token));
        const getData = async () => {
          const response = await axios.post(
            'http://localhost:3005/getTodoList',
            {
              userInfo,
            },
            {
              headers: {
                Authorization: token,
              },
            }
          );
          const dateList = response.data.dateList;
          const allList = response.data.allTodoList;
          const setData = [];
          for (let i = 0; i < dateList.length; i++) {
            const tempTodo = allList.filter(
              (todo) => todo.todo_date === dateList[i].todo_date
            );
            const setList = tempTodo.map((todo, idx) => {
              return {
                title: todo.todo_title,
                checked: todo.todo_checked === '0' ? false : true,
                id: idx,
              };
            });
            setData.push({ date: dateList[i].todo_date, todoList: setList });
          }
          dispatch(setAllTodoList(setData));
          const dateFormat = DateFormat(date);
          const todoListForDate = setData.find(
            (item) => item.date === dateFormat
          );
          if (todoListForDate) {
            dispatch(setTodoList(todoListForDate.todoList));
            nav('/MainPage');
          } else {
            dispatch(setTodoList([]));
            nav('/MainPage');
          }
        };
        getData();
        // nav('/MainPage');
      } else {
        alert('아이디 또는 비밀번호가 다릅니다.');
      }
    } catch (error) {
      console.log(error);
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
            placeholder="아이디를 입력해 주세요"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
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
