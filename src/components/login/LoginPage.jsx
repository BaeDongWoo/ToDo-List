import Frame from '../common/Frame';
import LoginTitle from './LoginTitle';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const nav = useNavigate();
  const startBtnHandler = () => {
    nav('/login');
  };
  return (
    <Frame className="login">
      <LoginTitle startBtnHandler={startBtnHandler} />
    </Frame>
  );
};
export default LoginPage;
