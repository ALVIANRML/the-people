import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from '../src/cms/Login'; // Import halaman Login
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/app" element={<App />} /> {/* Halaman App */}
        <Route path="/login" element={<Login />} /> {/* Halaman Login */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
