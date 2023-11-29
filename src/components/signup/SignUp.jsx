import { useNavigate } from 'react-router-dom';
import Header from '../form/Header';
import './SignUp.css';
import { useState } from 'react';
import Input from './Input';
import axios from 'axios';
const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const nav = useNavigate();
  const loginPageHandler = () => {
    nav('/login');
  };
  const signUpHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword)
      return alert('비밀번호를 다시 확인해주세요');
    try {
      const response = await axios.post('http://localhost:3005/signUp', {
        userName,
        userId,
        password,
      });
      console.log(response.data);
      // 서버에서의 응답을 확인하고 처리
      if (response.data === 1) {
        // 아이디가 있음
        alert('중복된 아이디 입니다.');
      } else {
        //아이디 없음
        nav('/login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="signup-container">
      <Header />
      <div className="signup-wrapper" onSubmit={signUpHandler}>
        <h2>회원가입</h2>
        <form id="signup-form">
          <Input
            title={'이름'}
            typed={'text'}
            id={'user-name'}
            value={userName}
            onChangeEvent={setUserName}
          />
          <Input
            title={'아이디'}
            typed={'text'}
            id={'id'}
            value={userId}
            onChangeEvent={setUserId}
          />
          <Input
            title={'비밀번호'}
            typed={'password'}
            id={'password'}
            value={password}
            onChangeEvent={setPassword}
          />
          <Input
            title={'비밀번호 확인'}
            typed={'password'}
            id={'confirm-password'}
            value={confirmPassword}
            onChangeEvent={setConfirmPassword}
          />
          <input type="submit" value="가입하기"></input>
          <input
            type="button"
            value="돌아가기"
            onClick={loginPageHandler}
          ></input>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
