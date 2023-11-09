import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3005/login', {
        userId,
        password,
      });
      console.log(response);
      // 서버에서의 응답을 확인하고 처리
      if (response.data === '확인') {
        console.log('로그인 성공!');
        nav('/MainPage');
      } else {
        console.log('로그인 실패');
        alert('아이디 또는 비밀번호가 다릅니다.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h2>Login</h2>
        <form method="get" id="login-form" onSubmit={handleLogin}>
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
          <label htmlFor="remember-check"></label>
          <input type="submit" value="로그인"></input>
          <input type="button" value="회원가입"></input>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
