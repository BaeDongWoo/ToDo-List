import './Header.css';
import Logo from '../../assets/mytodo-logo.png';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserInfo, setAllTodoList, setTodoList } from '../reducer/Action';
const Header = () => {
  const [isLabel, setIsLabel] = useState('로그인');
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  useEffect(() => {
    if (userInfo) setIsLabel('로그아웃');
  }, []);
  const nav = useNavigate();
  const loginBtnHandler = () => {
    // localStorage.clear();
    dispatch(setUserInfo(null));
    dispatch(setAllTodoList([]));
    dispatch(setTodoList([]));
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
        label={isLabel}
        className={'login-btn'}
        clickHandler={loginBtnHandler}
      />
    </div>
  );
};
export default Header;
