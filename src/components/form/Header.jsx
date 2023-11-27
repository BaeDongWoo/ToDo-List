import Card from '../main/todolist/Card';
import './Header.css';
const Header = (props) => {
  return (
    <div className="header">
      <button className="login-btn">my-todo</button>
      <button className="login-btn">로그인</button>
    </div>
  );
};
export default Header;
