import './LoginTitle.css';
const LoginTitle = (props) => {
  return (
    <div className="Login-title">
      <div className="title">
        <h1>Hello!!</h1>
        <h1>My To-Do</h1>
        <button className="start-btn" onClick={props.startBtnHandler}>
          시작하기
        </button>
      </div>
    </div>
  );
};
export default LoginTitle;
