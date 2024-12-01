import React, { useState } from 'react';
import './AppointmentForm.css';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function AppointmentForm() {

const navigate = useNavigate();



  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phoneNumber: '',
    carRegistration: '',
    explain: '',
    date: '',
    startTime: '07:00',
    endTime: '12:00',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment Submitted');
  };

  return (
    <div className="AppointmentForm-container">
      <div className='AppointmentForm-Form'>
      <div className='nongsun'>
        <div className='nongsun-arrow'>
      <p className='bi bi-arrow-left-short' onClick={( )=>navigate('/')}></p>
      </div>
      <h2 className="appointment-title">Appointment</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <input
            type="text"
            name="firstname"
            placeholder="Firstname *"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="lastname"
            placeholder="Lastname *"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone number *"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="carRegistration"
            placeholder="Car registration"
            value={formData.carRegistration}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="explain"
            placeholder="Explain"
            value={formData.explain}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <input
            type="date"
            name="date"
            placeholder="Date *"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="time-group">
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="time-input"
          />
          <span>To</span>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="time-input"
          />
        </div>
        <button type="submit" className="submit-button" onClick={() => navigate('/parkinglist')}>Select place</button>
      </form>
      </div>
      </div>
    <div className="menubar">
        <div className="container-icon">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div>
              <span className="bi bi-house-door"></span>
              <br />
              <span className="Text-bar">Home</span>
            </div>
          </NavLink>
        </div>
        <div className="container-icon">
          <NavLink
            to="/qrscan"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div>
              <span className="bi bi-qr-code"></span>
              <br />
              <span className="Text-bar">Qr code</span>
            </div>
          </NavLink>
        </div>
        <div className="container-icon">
          <NavLink
            to="/appointmentform"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div>
              <span className="bi bi-calendar4"></span>
              <br />
              <span className="Text-bar">Appointment</span>
            </div>
          </NavLink>
        </div>
        <div className="container-icon">
          <NavLink
            to="/notifications"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div>
              <span className="bi bi-bell"></span>
              <br />
              <span className="Text-bar">Notification</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
