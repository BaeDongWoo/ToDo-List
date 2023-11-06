import Frame from '../form/Frame';
import LoginForm from './LoginForm';
import LoginTitle from './LoginTitle';
import './LoginPage.css';
import { useState } from 'react';
const LoginPage = () => {
  const [startBtn, setStartBtn] = useState(false);
  const startBtnHandler = () => {
    setStartBtn(true);
  };
  return (
    <Frame className="login">
      {startBtn === false ? (
        <LoginTitle startBtnHandler={startBtnHandler} />
      ) : (
        <LoginForm />
      )}
    </Frame>
  );
};
export default LoginPage;
