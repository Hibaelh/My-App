import { memo } from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import './assets/styles.css';

const Explore = () => {
  return (
    <>
      {/* HEADER */}
      <section className="header">
        <nav>
          <div className="nav-left">
            <Link to="/">
              <img src="public/images/image.png" alt="Logo" className="logo" />
            </Link>
            <div className="auth-buttons">
              <a href="#" onClick={() => document.getElementById('id01').style.display='block'} className="btn login-btn">Login</a>
              <Link to="/register-form" className="btn register-btn">Register</Link>
            </div>
            <div id="id01" className="modal">
              <form className="modal-content animate" action="/action_page.php" method="post">
                <div className="imgcontainer">
                  <span onClick={() => document.getElementById('id01').style.display='none'} className="close" title="Close Modal">&times;</span>
                  <img src="public/images/logo.jpg" alt="logo" className="avatar" />
                </div>
                <div className="container">
                  <label htmlFor="uname"><b>Email</b></label>
                  <input type="text" placeholder="Enter Email" name="Email" required />
                  <label htmlFor="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required />
                  <button type="submit">Login</button>
                  <label><input type="checkbox" defaultChecked name="remember" /> Remember me</label>
                </div>
                <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                  <button type="button" onClick={() => document.getElementById('id01').style.display='none'} className="cancelbtn">Cancel</button>
                  <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
              </form>
            </div>
          </div>

          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" id="closeIcon" onClick={hideMenu} style={{ display: 'none' }}></i>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/explore">BROWSE</Link></li>
              <li><a href="#footer">ABOUT</a></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
          <i className="fa fa-bars" id="menuIcon" onClick={showMenu}></i>
        </nav>
        <div className="text-box">
          <h1>Explore Local Businesses</h1>
          <p>Find the perfect local business for your needs—filter by type, area, and price.</p>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="search-section">
        <div className="search-container">
          <input type="text" placeholder="Search businesses..." />
          <select>
            <option value="">All Types</option>
            <option value="restaurant">Restaurant</option>
            <option value="retail">Retail</option>
            <option value="service">Service</option>
            <option value="health">Health & Wellness</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
          </select>
          <select>
            <option value="">All Areas</option>
            <option value="downtown">Downtown</option>
            <option value="suburbs">Suburbs</option>
            <option value="rural">Rural</option>
          </select>
          <select>
            <option value="">Any Price</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button className="search-btn">Search</button>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="explore-gallery" style={{ backgroundImage: `url('images/background.jpg')` }}>
    <div className="explore-overlay">
      <h2>Business Listings</h2>
      <div className="explore-card-container">
        {Array.from({ length: 20 }, (_, i) => (
          <div className="explore-card" key={i}>
            <img src="public/images/placeholder.jpg" alt={`Business ${i + 1}`} />
            <div className="explore-card-content">
              <h3>{`Business ${i + 1}`}</h3>
              <p>
                📍 Area: Sample Area<br />
                💲 Price: Medium<br />
                ⭐ Rating: 4.{i % 10} ({100 + i * 5} reviews)
              </p>
              <a href="#" className="explore-btn-small">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
</section>



      {/* FOOTER */}
      <footer className="site-footer" id="footer">
  <div className="footer-container">
    {/* Left Column: Brand and Description */}
    <div className="footer-column footer-brand">
      <h2>NH Listings</h2>
      <p>Connecting communities through local businesses.</p>
      <p>
        Building strong connections fosters growth and resilience. <br /> <br />
        Supporting local businesses strengthens the heart of every neighborhood.
      </p>
    </div>

    {/* Middle Column: Quick Links */}
    <div className="footer-column footer-links">
      <h2>Quick Links</h2>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/explore">Browse Businesses</Link></li>
        <li><Link to="/user-profile">Add Your Business</Link></li>
        <li><a href="#footer">About Us</a></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

    {/* Right Column: Legal */}
    <div className="footer-column footer-legal">
      <h2>Legal</h2>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
      </ul>
    </div>
  </div>

  {/* Footer Bottom Section */}
  <div className="footer-bottom">
    <p>&copy; 2025 NH Listings. All rights reserved.</p>
  </div>
</footer>
    </>
  );
};

function showMenu() {
  document.getElementById('navLinks').style.right = '0';
  document.getElementById('menuIcon').style.display = 'none';
  document.getElementById('closeIcon').style.display = 'block';
}

function hideMenu() {
  document.getElementById('navLinks').style.right = '-250px';
  document.getElementById('menuIcon').style.display = 'block';
  document.getElementById('closeIcon').style.display = 'none';
}

export default Explore;
