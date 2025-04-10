import { memo, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import './assets/styles.css';

const Contact = () => {
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

            {/* Modal */}
            {showModal && (
              <div id="id01" className="modal">
                <form className="modal-content animate" method="post">
                  <div className="imgcontainer">
                    <span className="close" onClick={() => setShowModal(false)} title="Close Modal">&times;</span>
                    <img src="public/images/logo.jpg" alt="logo" className="avatar" />
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
                    <span className="psw">Forgot <a href="#">password?</a></span>
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
            </ul>
          </div>

          <i className="fa fa-bars" id="menuIcon" onClick={showMenu}></i>
        </nav>

        <div className="text-box">
          <h1>Contact Us</h1>
          <p>Have questions or feedback? Get in touch with us and we'll be happy to help!</p>
        </div>
      </section>

      {/* =================== CONTACT FORM =================== */}
      <section
        className="contact-page"
        style={{ padding: '40px 0', background: 'rgba(255, 255, 255, 0.9)' }}
      >
        <div
          className="contact-container"
          style={{
            maxWidth: '1200px',
            margin: 'auto',
            background: 'rgba(255,255,255,0.95)',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Get in Touch</h2>
          <p style={{ textAlign: 'center', marginBottom: '40px' }}>
            Fill out the form below or reach us at <strong>info@localbizdirectory.com</strong>.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted! (This is a placeholder)');
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                }}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              style={{
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '8px',
              }}
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              style={{
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '8px',
              }}
            ></textarea>
            <button
              type="submit"
              className="btn"
              style={{ alignSelf: 'center', padding: '12px 30px' }}
            >
              Send Message
            </button>
          </form>

          <div className="contact-info" style={{ marginTop: '40px', textAlign: 'center' }}>
            <p><strong>Email:</strong> info@localbizdirectory.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Address:</strong> 123 Local Biz Street, City, Country</p>
          </div>
        </div>
      </section>

      {/* =================== FOOTER =================== */}
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
    </div>
  );
};
export default Contact;
