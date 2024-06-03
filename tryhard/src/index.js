import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import HiddenPage from './Pages/HiddenPage';
// Header and Footer
import Footer from './Routings/footer';
import Header from './Routings/header';
// All sites
import App from './App';
//DevLog
import DevLog from './Pages/DevLog';
import DevLogDetails from './Pages/DevLogDetails';
//ProgressUpdate
import ProgressUpdate from './Pages/ProgressUpdate';
import ProgressUpdateDetails from './Pages/ProgressUpdateDetails';
//Projects
import Projects from './Pages/projectshub';
import ProjectDetails from './Pages/ProjectDetails';
//art
import Art from './Pages/arthub';
import ArtDetails from './Pages/art-details';
//about
import About from './Pages/about';
//css
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/routings/footer" element={<Footer />} />
      <Route path="/routings/header" element={<Header />} />
      <Route path="/Pages/devlog" element={<DevLog />} />
      <Route path="/Pages/progress-update" element={<ProgressUpdate />} />
      <Route path="/Pages/projectshub" element={<Projects />}/>
      <Route path="/ProjectDetails" element={<ProjectDetails />} />
      <Route path="/art-details" element={<ArtDetails />} />
      <Route path="/ProgressUpdateDetails" element={<ProgressUpdateDetails />} />
      <Route path="/DevLogDetails" element={<DevLogDetails />} />
      <Route path="/Pages/arthub" element={<Art />} />
      <Route path="/Pages/about" element={<About />} />
      <Route path="/Pages/HiddenPage" element={<HiddenPage />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();