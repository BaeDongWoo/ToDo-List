import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../form/Header';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../reducer/Action';
const LoginForm = () => {
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
      if (response.data.length !== 0) {
        const userInfo = response.data[0];
        dispatch(setUserInfo(userInfo));
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
        nav('/MainPage');
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
