import React from 'react';
import Payment from './pages/Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css'; // Assuming you have some global styles
import Home from './pages/Home'; 
import CourseDetails from './pages/CourseDetails';
function App() {
  return (
    <Router>
      <Routes>
        

        <Route path="/payment" element={<Payment />} />

        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
