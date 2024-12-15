import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';

function  Configuration_form() {
  // const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    
    totalTickets: '',
    releaseRate: '',
    retrievalRate: '',
    maxCapacity: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    // Total Tickets Validation
    if (!formData.totalTickets) {
      newErrors.totalTickets = 'Total Number of Tickets is required';
    } else if (formData.totalTickets < 1) {
      newErrors.totalTickets = 'Total Number of Tickets must be at least 1';
    }

    // Release Rate Validation
    if (!formData.releaseRate) {
      newErrors.releaseRate = 'Customer Release Rate is required';
    } else if (formData.releaseRate < 0 || formData.releaseRate > 100) {
      newErrors.releaseRate = 'Customer Release Rate must be between 0 and 100';
    }

    // Retrieval Rate Validation
    if (!formData.retrievalRate) {
      newErrors.retrievalRate = 'Customer Retrieval Rate is required';
    } else if (formData.retrievalRate < 0 || formData.retrievalRate > 100) {
      newErrors.retrievalRate = 'Customer Retrieval Rate must be between 0 and 100';
    }

    // Max Capacity Validation
    if (!formData.maxCapacity) {
      newErrors.maxCapacity = 'Max Capacity for the Ticket Pool is required';
    } else if (formData.maxCapacity < 1) {
      newErrors.maxCapacity = 'Max Capacity must be at least 1';
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
        totalTickets: '',
        releaseRate: '',
        retrievalRate: '',
        maxCapacity: '',
      });
      setErrors({});
    }
  };

  return (
    <div>
      <Link to= "/"> Go To Tickets Page</Link>
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ textAlign: 'center' }}>
        Configuration Form</h2>

        {/* Total Number of Tickets */}
        <div style={inputWrapperStyle}>
          <label>Total Number of Tickets</label>
          <input
            type="number"
            name="totalTickets"
            value={formData.totalTickets}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.totalTickets && <p style={errorStyle}>{errors.totalTickets}</p>}
        </div>

        {/* Customer Release Rate */}
        <div style={inputWrapperStyle}>
          <label>Customer Release Rate (%)</label>
          <input
            type="number"
            name="releaseRate"
            value={formData.releaseRate}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.releaseRate && <p style={errorStyle}>{errors.releaseRate}</p>}
        </div>

        {/* Customer Retrieval Rate */}
        <div style={inputWrapperStyle}>
          <label>Customer Retrieval Rate (%)</label>
          <input
            type="number"
            name="retrievalRate"
            value={formData.retrievalRate}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.retrievalRate && <p style={errorStyle}>{errors.retrievalRate}</p>}
        </div>

        {/* Max Capacity for Ticket Pool */}
        <div style={inputWrapperStyle}>
          <label>Max Capacity for the Ticket Pool</label>
          <input
            type="number"
            name="maxCapacity"
            value={formData.maxCapacity}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.maxCapacity && <p style={errorStyle}>{errors.maxCapacity}</p>}
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
  height: '100vh',
  width: '100vw',
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
  maxWidth: '500px',
  // backgroundColor : "#FFF0DC"
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

export default Configuration_form;
