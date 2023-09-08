import logo from './logo.svg';
import { Link } from "react-router-dom";

import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx';

function App() {
  return (
<>
      <div className='navbar'>
        <div className='studentInfo'>
          
          <h2 className="studentName">Achareeya Wicaksa Putra Pribadi</h2>
          <p className="studentId">FE2828609</p>
          
        </div>
        <Link to='/'>Home</Link>

      </div>
    

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
