import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/login/LoginPage';
import MainPage from './components/main/MainPage';
import LoginForm from './components/login/LoginForm';
import SingUp from './components/signup/SignUp';
import KakaoLoginCallback from './components/login/social/kakao/kakaoLoginCallback';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signUp" element={<SingUp />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/kakao-auth" element={<KakaoLoginCallback />} />
    </Routes>
  );
}

export default App;
