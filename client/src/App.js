import './App.scss'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

import RootPage from './pages/RootPage/RootPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AuthPage from './pages/AuthPage/index';
import SignupPage from './pages/SignUpPage/index';
import PostPage from './pages/PostPage/PostPage';
import PostingPage from './pages/PostPage/PostingPage/PostingPage';
import MyPage from './pages/MyPage';

import LoadingComponent from './components/Loading/LoadingComponent';

function App() {
  return (
    <div className="body">
      <NavBar />
      <Routes>
        <Route path='/' element={<RootPage LoadingComponent={LoadingComponent} />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/posts' element={<PostPage LoadingComponent={LoadingComponent} />} />
        <Route path='/posting' element={<PostingPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
