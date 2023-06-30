import React, {useState} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import { Lesson, Module } from './Module';
import Signup from './Signup'
import Login from './Login';



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = (isLoggedIn) => {
    setIsAuthenticated(isLoggedIn);
  };
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup/>}/>
      
      <Route path="/home" element={<Module />}/>
      <Route path="/:lessonId" element={<Lesson />}/>
  </Routes>
  );
};

export default App;
