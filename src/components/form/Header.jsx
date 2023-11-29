import Card from '../main/todolist/Card';
import './Header.css';
import Logo from '../../assets/mytodo-logo.png';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const nav = useNavigate();
  const loginBtnHandler = () => {
    nav('/login');
  };
  const logoHandler = () => {
    nav('/MainPage');
  };
  return (
    <div className="header">
      <button className="logo-btn" onClick={logoHandler}>
        <img src={Logo} id="logo"></img>
        <div id="logo-title">My-ToDo</div>
      </button>
      {/* <h3 className="user-name">
        {JSON.parse(localStorage.getItem('userInfo')).user_name}님 환영합니다
      </h3> */}
      <Button
        label={'로그인'}
        className={'login-btn'}
        clickHandler={loginBtnHandler}
      />
    </div>
  );
};
export default Header;
