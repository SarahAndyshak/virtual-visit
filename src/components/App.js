import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Splash from './Splash';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Splash />} />
    </Routes>
    </>
  );
}

export default App;
