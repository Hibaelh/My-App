
import { memo } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Global styles
import "./assets/styles.css";

// Page components
import App from './App.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Explore from './Explore.jsx';
import Business from './Business.jsx';
import RegisterForm from './Register-form.jsx';
import UserProfile from './Profile.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/business" element={<Business />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
