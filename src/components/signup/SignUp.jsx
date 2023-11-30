import { useNavigate } from 'react-router-dom';
import Header from '../form/Header';
import './SignUp.css';
import { useEffect, useRef, useState } from 'react';
import Input from './Input';
import axios from 'axios';
import validation from './validation';
const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPwdId, setIsConfirmPwdId] = useState('confirm-password');
  const nav = useNavigate();
  const loginPageHandler = () => {
    nav('/login');
  };
  const confirmPwdHandler = (value) => {
    setConfirmPassword(value);
    if (value === '' || password === '')
      return setIsConfirmPwdId('confirm-password');
    if (password !== value) {
      setIsConfirmPwdId('confirm-password-failure');
    } else setIsConfirmPwdId('confirm-password-success');
  };
  const PwdHandler = (value) => {
    setPassword(value);
    if (value === '' || confirmPassword === '')
      return setIsConfirmPwdId('confirm-password');
    if (confirmPassword !== value) {
      setIsConfirmPwdId('confirm-password-failure');
    } else setIsConfirmPwdId('confirm-password-success');
  };
  const signUpHandler = async (e) => {
    e.preventDefault();
    const val = new validation();
    if (!val.validationId(userId)) {
      return alert('아이디는 4글자 이상 12글자 이하 영어,숫자만 가능합니다.');
    }
    if (!val.validationPwd(password)) {
      return alert('비밀번호는 8글자 이상 영어,숫자만 가능합니다.');
    }
    if (!val.isCheckPwd(password, confirmPassword)) {
      return alert('비밀번호를 다시 확인해주세요.');
    }
    try {
      const response = await axios.post('http://localhost:3005/signUp', {
        userName,
        userId,
        password,
      });
      // 서버에서의 응답을 확인하고 처리
      if (response.data === 1) {
        // 아이디가 있음
        alert('중복된 아이디 입니다.');
      } else {
        //아이디 없음
        nav('/login');
      }
    } catch (error) {
      console.log(error);
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
            id={isConfirmPwdId}
            value={password}
            onChangeEvent={PwdHandler}
          />
          <Input
            title={'비밀번호 확인'}
            typed={'password'}
            id={isConfirmPwdId}
            value={confirmPassword}
            onChangeEvent={confirmPwdHandler}
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
