import React, { useState } from 'react';
import './assets/styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
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
              <button onClick={() => setShowModal(true)} className="btn login-btn">Login</button>
              <Link to="/register" className="btn register-btn" style={{ width: 'auto' }}>Register</Link>
            </div>

            {showModal && (
              <div id="id01" className="modal">
                <form className="modal-content animate" action="/action_page.php" method="post">
                  <div className="imgcontainer">
                    <span
                      onClick={() => setShowModal(false)}
                      className="close"
                      title="Close Modal"
                    >
                      &times;
                    </span>
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
                    <button type="button" onClick={() => setShowModal(false)} className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" id="closeIcon" onClick={hideMenu} style={{ display: 'none' }}></i>
            <ul>
              <li><Link to="/home">HOME</Link></li>
              <li><Link to="/explore">BROWSE</Link></li>
              <li><a href="#footer">ABOUT</a></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>

          <i className="fa fa-bars" id="menuIcon" onClick={showMenu}></i>
        </nav>

        <div className="text-box">
          <h1>Local Business Directory</h1>
          <p>
            Our platform connects you with the best businesses in town...<br />
            Explore, connect, and shop local—because thriving businesses make for a thriving community!
          </p>
        </div>
      </section>

      {/* =================== FEATURED =================== */}
      <section className="small-display">
        <div className="overlay">
          <h2>Featured</h2>
          <div className="card-container">
            <div className="card">
              <img src="public/images/download (5).jpg" alt="Sweet Haven Bakery" />
              <div className="card-content">
                <h3>Sweet Haven Bakery</h3>
                <p>📍 Crook Log Road<br />⭐ 4.5 (876 reviews)<br />🕒 Closes at 20:00</p>
                <a href="#" className="btn-small3">read more</a>
              </div>
            </div>

            <div className="card">
              <img src="public/images/download (6).jpg" alt="Blossom & Bloom" />
              <div className="card-content">
                <h3>Blossom & Bloom Florist</h3>
                <p>📍 High Street<br />⭐ 4.7 (563 reviews)<br />🕒 Closes at 18:00</p>
                <a href="#" className="btn-small3">read more</a>
              </div>
            </div>

            <div className="card">
              <img src="public/images/download (7).jpg" alt="Lock & Key" />
              <div className="card-content">
                <h3>Lock & Key Solutions</h3>
                <p>📍 Main Road<br />⭐ 4.3 (412 reviews)<br />🕒 Closes at 22:00</p>
                <a href="#" className="btn-small3">read more</a>
              </div>
            </div>
          </div>
          <div className='btn2'>
          <Link to="/explore" className="btn">Explore</Link>
          <Link to="/user-profile" className="btn">List your business</Link>
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

export default Home;
