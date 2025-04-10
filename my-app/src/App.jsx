import { memo } from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';


function App() {
  return (
    <nav className="doorway-nav">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/business">Business</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default App;

