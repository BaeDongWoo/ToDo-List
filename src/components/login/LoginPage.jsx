import Frame from '../form/Frame';
import LoginForm from './LoginForm';
import LoginTitle from './LoginTitle';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  // const [startBtn, setStartBtn] = useState(false);
  const nav = useNavigate();
  const startBtnHandler = () => {
    nav('/MainPage');
  };
  return (
    <Frame className="login">
      <LoginTitle startBtnHandler={startBtnHandler} />
    </Frame>
  );
};
export default LoginPage;
