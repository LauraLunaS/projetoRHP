import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Calendar from './Calendar';
import Additen from './Additens';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Calendar" element={<Calendar />} />
      <Route path="/Additen" element={<Additen />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();