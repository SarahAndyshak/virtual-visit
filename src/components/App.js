import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Splash from './Splash';
import Met from './Met';
import Manuscripts from './Manuscripts'
import Getty from './Getty'
import Exhibitions from './Exhibitions'
import Tours from './Tours';
import ImageCredits from './ImageCredits';
import Publications from './Publications';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/met" element={<Met />} />
      <Route path="manuscripts" element={<Manuscripts />} />
      <Route path="/getty" element={<Getty />} />
      <Route path="/exhibitions" element={<Exhibitions />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/publications" element={<Publications />} />

      <Route path="/images" element={<ImageCredits />} />

    </Routes>
    <Footer />
    </>
  );
}

export default App;
