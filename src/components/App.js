import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Splash from './Splash';
import Met from './Met';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/met" element={<Met />} />
    </Routes>
    </>
  );
}

export default App;
