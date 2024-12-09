import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Predict from './Page/Predict'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/predict" element={<Predict/>} />

      </Routes>
    </Router>
  </React.StrictMode>
);



reportWebVitals();
