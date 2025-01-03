import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Predict from './page/Predict';
import Main from './page/Main';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/navbar';
import Pencegahan from './page/pencegahan';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/predict" element={<Predict/>} />
        <Route path="/pencegahan" element={<Pencegahan/>} />

      </Routes>
    </Router>
  </React.StrictMode>
);
