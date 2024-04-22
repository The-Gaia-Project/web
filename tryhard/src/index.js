import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// Header and Footer
import Footer from './Routings/footer';
import Header from './Routings/header';
import WorkInProgrss from './Routings/WorkInProgrss';
// All sites
import App from './App';
import DevLog from './Pages/devlog';
import ProgressUpdate from './Pages/progress-update';
import Projects from './Pages/projectshub';
import ProjectDetails from './Pages/ProjectDetails'; // Make sure to create this component
import Art from './Pages/arthub';
import About from './Pages/about';

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
      <Route path="/Pages/projectshub" element={<Projects />}>
        <Route path=":projectId" element={<ProjectDetails />} />
      </Route>
      <Route path="/Pages/arthub" element={<Art />} />
      <Route path="/Pages/about" element={<About />} />
      <Route path="/Routings/WorkInProgrss" element={<WorkInProgrss />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();