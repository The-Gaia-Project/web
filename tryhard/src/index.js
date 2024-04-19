import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// header and footer
import Footer from './Routings/footer';
import Header from './Routings/header';
// all sites
import App from './App';
import DevLog from './Pages/devlog';
import ProgressUpdate from './Pages/progress-update';
import Projects from './Pages/projectshub';
import Art from './Pages/arthub';
import About from './Pages/about';

import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/routings/footer" element={<Footer />} />
      <Route path="/routings/header" element={<Header />} />
      <Route path="/Pages/devlog" element={<DevLog />} />
      <Route path="/Pages/progress-update" element={<ProgressUpdate />} />
      <Route path="/Pages/projectshub" element={<Projects />} />
      <Route path="/pages/arthub" element={<Art />} />
      <Route path="/Pages/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
