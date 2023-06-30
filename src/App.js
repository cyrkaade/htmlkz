import React, {useState, createContext} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import { Lesson, Module } from './Module';
import Signup from './Signup'
import Login from './Login';
import Protected from './Protected';
// import ProtectedRoute from './ProtectedRoute';


const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} logIn={logIn} logOut={logOut}/>
    <Routes>
      <Route path="/" element={<Login logIn={logIn} />} />
      <Route path="/signup" element={<Signup logIn={logIn}/>}/>
      
      <Route path="/home" element={<Protected isLoggedIn={isLoggedIn}><Module /></Protected>}/>
      <Route path="/:lessonId" element={<Protected isLoggedIn={isLoggedIn}><Lesson /></Protected>}/>
  </Routes>
  </div>
  );
};

export default App;
