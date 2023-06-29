import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Lesson, Module } from './Module';



const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Module />} />
      <Route path="/:lessonId" element={<Lesson />} />
  </Routes>
  );
};

export default App;
