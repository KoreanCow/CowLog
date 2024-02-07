import './App.scss'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import RootPage from './pages/RootPage';
import NotFoundPage from './pages/NotFoundPage';
import AuthPage from './pages/AuthPage';
import SignupPage from './pages/SignupPage';
import MyPage from './pages/MyPage';

function App() {
  return (
    <div className="body">
      <NavBar />
      <Routes>
        <Route path='/' element={<RootPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
