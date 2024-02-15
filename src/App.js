import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/login/LoginPage';
import MainPage from './components/main/MainPage';
import LoginForm from './components/login/LoginForm';
import SingUp from './components/signup/SignUp';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signUp" element={<SingUp />} />
      <Route path="/MainPage" element={<MainPage />} />
    </Routes>
  );
}

export default App;
