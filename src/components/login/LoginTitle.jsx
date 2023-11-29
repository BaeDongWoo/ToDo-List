import Button from '../form/Button';
import './LoginTitle.css';
const LoginTitle = (props) => {
  return (
    <div className="Login-title">
      <div className="title">
        <h1>Hello!!</h1>
        <h1>My To-Do</h1>
        <Button
          className={'start-btn'}
          label={'시작하기'}
          clickHandler={props.startBtnHandler}
        />
      </div>
    </div>
  );
};
export default LoginTitle;
