import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';

function Customer() {
  // const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    quantity: '',
    fullName: '',
    email: '',
    contactNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.quantity) {
      newErrors.quantity = 'Quantity is required';
    } else if (formData.quantity < 1) {
      newErrors.quantity = 'Quantity must be at least 1';
    }
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.contactNumber) {
      newErrors.contactNumber = 'Contact Number is required';
    } else if (!/^\d+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Contact Number must be numeric';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
      alert('Form submitted successfully!');
      setFormData({
        quantity: '',
        fullName: '',
        email: '',
        contactNumber: '',
      });
      setErrors({});
    }
  };

  return (
    <div>
      <Link to= "/"> Go To Tickets Page</Link>
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ textAlign: 'center' }}>Customer Form</h2>
        {/* Quantity (small input box) */}
        <div style={inputWrapperStyle}>
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            style={quantityInputStyle}
          />
          {errors.quantity && <p style={errorStyle}>{errors.quantity}</p>}
        </div>

        {/* Full Name */}
        <div style={inputWrapperStyle}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.fullName && <p style={errorStyle}>{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div style={inputWrapperStyle}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>

        {/* Contact Number */}
        <div style={inputWrapperStyle}>
          <label>Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.contactNumber && <p style={errorStyle}>{errors.contactNumber}</p>}
        </div>

        {/* Submit Button */}
        <div style={buttonWrapperStyle}>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',  // Full viewport height
  width: '100vw',   // Full viewport width
  padding: '20px',
  boxSizing: 'border-box',
  fontFamily: 'Arial, sans-serif',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  border: '1px solid #ccc',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '500px',  // Limit maximum width
};

const inputWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  width: '90%',
  padding: '10px',
  border: '1px solid #aaa',
  borderRadius: '5px',
  fontSize: '16px',
  boxSizing: 'border-box',
};

const quantityInputStyle = {
  ...inputStyle,
  width: '17%',
};

const buttonWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  width: '30%',
  padding: '10px',
  backgroundColor: '#5a5aff',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  fontSize: '16px',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  fontSize: '13px',
};

export default Customer;