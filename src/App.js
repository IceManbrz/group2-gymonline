import logo from './logo.svg';
import { Link } from "react-router-dom";

import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx';
import TrainerProfile from './routes/Trainer_profile';

function App() {
  return (
<>
      <div className="flex items-center justify-center mb-10">
        <div className=''>
          
          <h2 className=""></h2>
          
        </div>
        <a href={"/"} target="_blank" rel="noopener noreferrer"  className="mr-4" >
        <br></br>Home</a>
        <a href={"/"} target="_blank" rel="noopener noreferrer"  className="mr-4" >
        <br></br>Booking</a>
        <a href={"/trainerprofiles"} target="_blank" rel="noopener noreferrer" >
        <br></br>Trainer</a>
      </div>
    

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainerprofiles" element={<TrainerProfile />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
