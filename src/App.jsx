import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from '@components/navbar/navbar.jsx';
import Home from '@components/home/home.jsx';
import Projects from '@components/projects/projects.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className='page-container'>
      <BrowserRouter basename="/ReactPortfolio/"> {/* Correct base path */}
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path='/home' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
