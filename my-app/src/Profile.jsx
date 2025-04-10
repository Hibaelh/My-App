import { memo } from "react"; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './assets/styles.css'; // Optional if styles are shared

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);

  const showMenu = () => {
    document.getElementById('navLinks').style.right = '0';
    document.getElementById('menuIcon').style.display = 'none';
    document.getElementById('closeIcon').style.display = 'block';
  };

  const hideMenu = () => {
    document.getElementById('navLinks').style.right = '-250px';
    document.getElementById('menuIcon').style.display = 'block';
    document.getElementById('closeIcon').style.display = 'none';
  };

  return (
    <div>
      {/* =================== HEADER =================== */}
      <section className="header">
        <nav>
          <div className="nav-left">
            <Link to="/">
              <img src="public/images/image.png" alt="Logo" className="logo" />
            </Link>
            <div className="auth-buttons">
              <button className="btn login-btn" onClick={() => setShowModal(true)}>Login</button>
              <Link to="/register" className="btn register-btn" style={{ width: 'auto' }}>Register</Link>
            </div>

            {showModal && (
              <div id="id01" className="modal">
                <form className="modal-content animate" method="post">
                  <div className="imgcontainer">
                    <span className="close" title="Close Modal" onClick={() => setShowModal(false)}>&times;</span>
                    <img src="/images/logo.jpg" alt="logo" className="avatar" />
                  </div>
                  <div className="container">
                    <label htmlFor="uname"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="Email" required />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <button type="submit">Login</button>
                    <label>
                      <input type="checkbox" defaultChecked name="remember" /> Remember me
                    </label>
                  </div>
                  <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                    <button type="button" className="cancelbtn" onClick={() => setShowModal(false)}>Cancel</button>
                    <span className="psw">Forgot <Link to="#">password?</Link></span>
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" id="closeIcon" onClick={hideMenu} style={{ display: 'none' }}></i>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/explore">BROWSE</Link></li>
              <li><a href="#footer">ABOUT</a></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <li><Link to="/profile">MY ACCOUNT</Link></li>
            </ul>
          </div>
          <i className="fa fa-bars" id="menuIcon" onClick={showMenu}></i>
        </nav>

        <div className="text-box">
          <h1>My Account</h1>
          <p>Manage your profile, update your details, and review your favorites or business listings.</p>
        </div>
      </section>

      {/* =================== PROFILE SECTION =================== */}
      <section className="profile-section" style={{ padding: '40px 0', background: 'rgba(255, 255, 255, 0.9)' }}>
        <div className="profile-container" style={containerStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Account Details</h2>

          <div className="account-details" style={detailsStyle}>
            {/* Profile Picture */}
            <div className="profile-picture-section" style={pictureStyle}>
              <img src="public/images/profile-placeholder.jpg" alt="Profile" style={imageStyle} />
              <form>
                <input type="file" accept="image/*" style={{ marginBottom: '10px' }} />
                <button type="submit" className="btn" style={{ padding: '10px 20px' }}>Update Picture</button>
              </form>
            </div>

            {/* Account Form */}
            <div className="account-update-section" style={{ flex: 2, minWidth: '300px' }}>
              <form>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                  <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
                  <input type="email" name="email" placeholder="Your Email" required style={inputStyle} />
                </div>
                <div style={{ marginTop: '20px' }}>
                  <input type="password" name="password" placeholder="New Password" style={inputStyle} />
                </div>
                <div style={{ marginTop: '20px' }}>
                  <button type="submit" className="btn" style={{ padding: '12px 30px' }}>Update Account</button>
                </div>
              </form>
            </div>
          </div>

          {/* Favorites Section */}
          <div className="client-activities" style={{ marginTop: '40px' }}>
            <h3 style={{ marginBottom: '20px' }}>My Favorites & Ratings</h3>
            <div className="favorites-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div className="favorite-card" style={cardStyle}>
                <h4>Business Name</h4>
                <p>⭐ 4.5</p>
                <p>Your review excerpt goes here...</p>
                <Link to="/business" className="btn-small3" style={btnStyle}>View Details</Link>
              </div>
              <div className="favorite-card" style={cardStyle}>
                <h4>Another Business</h4>
                <p>⭐ 4.0</p>
                <p>Your review excerpt goes here...</p>
                <Link to="/business" className="btn-small3" style={btnStyle}>View Details</Link>
              </div>
            </div>
          </div>

          {/* Business Owner Listing */}
          <div className="business-owner-section" style={{ marginTop: '40px' }}>
            <h3 style={{ marginBottom: '20px' }}>My Business Listing</h3>
            <div className="business-card" style={cardStyleFull}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
                <img src="/images/placeholder.jpg" alt="Business" style={businessImageStyle} />
                <div style={{ flex: 1 }}>
                  <h4>My Business Name</h4>
                  <p>Location: 123 Main Street, City<br />Rating: 4.5 (200 reviews)<br />Price Range: Medium</p>
                </div>
                <div>
                  <Link to="/edit-business" className="btn-small3" style={btnStyle}>Edit</Link>
                  <Link to="#" className="btn-small3" style={btnStyle}>Remove</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== FOOTER =================== */}
      <footer className="site-footer" id="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>LocalBiz Directory</h2>
            <p>Connecting communities through local businesses.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/explore">Browse Businesses</Link></li>
              <li><Link to="/add-business">Add Your Business</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/profile">My Account</Link></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <Link to="#"><i className="fab fa-facebook-f"></i></Link>
              <Link to="#"><i className="fab fa-instagram"></i></Link>
              <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
              <Link to="#"><i className="fab fa-twitter"></i></Link>
            </div>
          </div>

          <div className="footer-legal">
            <h3>Legal</h3>
            <ul>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 LocalBiz Directory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '8px'
};

const cardStyle = {
  width: '300px',
  background: '#f9f9f9',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const cardStyleFull = {
  width: '100%',
  background: '#f9f9f9',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const btnStyle = {
  padding: '8px 12px',
  marginRight: '10px'
};

const containerStyle = {
  maxWidth: '1200px',
  margin: 'auto',
  background: '#fff',
  padding: '40px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
};

const detailsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '40px',
  alignItems: 'flex-start'
};

const pictureStyle = {
  flex: 1,
  minWidth: '300px',
  textAlign: 'center'
};

const imageStyle = {
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '50%',
  border: '2px solid #ccc',
  marginBottom: '20px'
};

const businessImageStyle = {
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '8px'
};

export default UserProfile;
