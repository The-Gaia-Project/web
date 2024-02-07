import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home';
import reportWebVitals from './reportWebVitals';
import ArtHome from './art/art-home';
import Projects from './projects/projects-home';
import PhysicalArt from './art/physical-art';
import DigitalArt from './art/digital-art';
import ThreeD from './art/3d';
import ArtPage from './art/ArtPage'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/art/art-home" element={<ArtHome />} />
      <Route path="/art/physical-art" element={<PhysicalArt />} />
      <Route path="/art/digital-art" element={<DigitalArt />} />
      <Route path="/art/3d" element={<ThreeD />} />
      <Route path="/projects/projects-home" element={<Projects />} />
      <Route path="/art/ArtPage/:id" element={<ArtPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
