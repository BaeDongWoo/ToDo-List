import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import Header from '../common/Header';
import './SignUp.css';
import { useState } from 'react';
import Input from './Input';
import ErrorHandler from '../error/errorHander';
import validation from './validation';
const SignUp = () => {
  const [userEmail, setUserEmail] = useState('');
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
    const validate = new validation();
    if (isConfirmPwdId !== 'confirm-password-success') {
      return alert('비밀번호를 확인해주세요');
    }
    if (!validate.validationPwd(password)) {
      return alert('비밀번호는 8글자 이상 영어,숫자만 가능합니다.');
    }
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        password
      );
      nav('/login');
    } catch (error) {
      ErrorHandler(error);
    }
  };
  return (
    <div className="signup-container">
      <Header />
      <div className="signup-wrapper" onSubmit={signUpHandler}>
        <h2>회원가입</h2>
        <form id="signup-form">
          <Input
            title={'이메일'}
            typed={'text'}
            className={'id'}
            value={userEmail}
            onChangeEvent={setUserEmail}
          />
          <Input
            title={'비밀번호'}
            typed={'password'}
            className={isConfirmPwdId}
            value={password}
            onChangeEvent={PwdHandler}
          />
          <Input
            title={'비밀번호 확인'}
            typed={'password'}
            className={isConfirmPwdId}
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
