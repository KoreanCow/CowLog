import './App.scss'
import { Route, Routes } from 'react-router-dom';
import RootPage from './pages/RootPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <div className="body">
      <NavBar />
      <Routes>
        <Route path='/' element={<RootPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
