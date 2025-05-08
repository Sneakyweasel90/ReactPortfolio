import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import Navbar from '@components/navbar/navbar.jsx';
import Home from '@components/home/home.jsx';
import Projects from '@components/projects/projects.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';


function App() {

  return (
    <div className='page-container'>
      <Router>
          {/* <Navbar /> */}
          <Routes>
              <Route path="/" element={<Navigate to="/home"  replace/>} />
              <Route path='/home' element={<Home />} />
              <Route path='/projects' element={<Projects />}/>
          </Routes>
          {/* <Footer/> */} 
      </Router>
</div>
  )
}

export default App
