import { memo } from "react";
import React, { useState } from 'react';

const RegisterForm = () => {
  const [role, setRole] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      window.location.href = '/home'; // Or use react-router's navigate()
    }, 3000);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h1 style={{ textAlign: 'center', color: '#1a1b3e' }}>Sign Up</h1>

      <form onSubmit={handleSubmit} style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: '#fff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}>
        {/* Role Selector */}
        <div className="form-control" style={{ marginBottom: '15px' }}>
          <label htmlFor="role" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
            Are you signing up as a client or business owner?
          </label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          >
            <option value="">-- Select Role --</option>
            <option value="client">Client</option>
            <option value="business_owner">Business Owner</option>
          </select>
        </div>

        {/* Client Fields */}
        {role === 'client' && (
          <>
            <div className="form-control">
              <label htmlFor="clientName">Name:</label>
              <input type="text" id="clientName" name="clientName" placeholder="Enter your name" />
            </div>
            <div className="form-control">
              <label htmlFor="clientEmail">Email:</label>
              <input type="email" id="clientEmail" name="clientEmail" placeholder="Enter your email" />
            </div>
            <div className="form-control">
              <label htmlFor="clientPassword">Password:</label>
              <input type="password" id="clientPassword" name="clientPassword" placeholder="Enter password" />
            </div>
            <div className="form-control">
              <label htmlFor="clientInterest">What type of business are you interested in?</label>
              <select id="clientInterest" name="clientInterest">
                <option value="restaurant">Restaurants</option>
                <option value="retail">Retail Shops</option>
                <option value="gyms">Gyms</option>
                <option value="salons">Salons</option>
                <option value="health">Health & Wellness</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
              </select>
            </div>
          </>
        )}

        {/* Business Owner Fields */}
        {role === 'business_owner' && (
          <>
            <div className="form-control">
              <label htmlFor="ownerName">Full Name:</label>
              <input type="text" id="ownerName" name="ownerName" placeholder="Enter your full name" />
            </div>
            <div className="form-control">
              <label htmlFor="ownerEmail">Email:</label>
              <input type="email" id="ownerEmail" name="ownerEmail" placeholder="Enter your email" />
            </div>
            <div className="form-control">
              <label htmlFor="ownerPassword">Password:</label>
              <input type="password" id="ownerPassword" name="ownerPassword" placeholder="Enter password" />
            </div>
            <div className="form-control">
              <label htmlFor="businessName">Business Name:</label>
              <input type="text" id="businessName" name="businessName" placeholder="Enter business name" />
            </div>
            <div className="form-control">
              <label htmlFor="businessType">Type of Business:</label>
              <select id="businessType" name="businessType">
                <option value="restaurant">Restaurant</option>
                <option value="retail">Retail Shop</option>
                <option value="service">Service Provider</option>
                <option value="health">Health & Wellness</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="businessLocation">Location:</label>
              <input type="text" id="businessLocation" name="businessLocation" placeholder="Enter location" />
            </div>
            <div className="form-control">
              <label htmlFor="businessWebsite">Website or Social Media:</label>
              <input type="text" id="businessWebsite" name="businessWebsite" placeholder="e.g. www.mybiz.com" />
            </div>
            <div className="form-control">
              <label htmlFor="businessContact">Contact Number:</label>
              <input type="text" id="businessContact" name="businessContact" placeholder="Enter contact number" />
            </div>
            <div className="form-control">
              <label htmlFor="businessDescription">Business Description:</label>
              <textarea id="businessDescription" name="businessDescription" placeholder="Describe your business"></textarea>
            </div>
            <div className="form-control">
              <label htmlFor="businessImage">Upload Business Images:</label>
              <input type="file" id="businessImage" name="businessImage" multiple />
            </div>
          </>
        )}

        <button type="submit" style={{
          backgroundColor: '#1a1b3e',
          color: 'white',
          padding: '12px',
          border: 'none',
          width: '100%',
          fontSize: '16px',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Sign Up
        </button>
      </form>

      {/* Popup Modal */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#1a1b3e',
          color: '#fff',
          padding: '25px 40px',
          borderRadius: '10px',
          boxShadow: '0px 0px 20px rgba(0,0,0,0.5)',
          fontSize: '18px',
          zIndex: 9999
        }}>
          ✅ Account created successfully!
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
