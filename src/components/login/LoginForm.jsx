import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';
const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h2>Login</h2>
        <form method="post" id="login-form">
          <input type="text" placeholder="아이디를 입력해 주세요"></input>
          <input type="password" placeholder="비밀번호를 입력해 주세요"></input>
          <label for="remember-check"></label>
          <input type="submit" value="로그인"></input>
          <input type="button" value="회원가입"></input>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
