import React, { useState } from "react";
import "./Checkpark.css";

const Checkpark = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [startTime, setStartTime] = useState("12:00");
  const [endTime, setEndTime] = useState("13:00");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };;

  return (
    <div className="checkpark-container">
      {/* Header */}
      <div className="header">
        <p className="bi bi-arrow-left"></p>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="date-picker"
        />
      </div>

      {/* Time Picker */}
      <div className="time-picker">
        <input
          type="time"
          value={startTime}
          onChange={handleStartTimeChange}
          className="time-input"
        />
        <span className="time-to">To</span>
        <input
          type="time"
          value={endTime}
          onChange={handleEndTimeChange}
          className="time-input"
        />
      </div>

      {/* Parking Locations */}
      <div className="location-list">
        <h3>รายการลานจอดรถ</h3>
        <ul>
          <li
            className="location-item"

          >
            🏢 อาคารA, มหาวิทยาลัยศรีปทุม
          </li>
          <li
            className="location-item"

          >
            🏢 อาคารB, มหาวิทยาลัยศรีปทุม
          </li>
          <li
            className="location-item"

          >
            🏞️ สนามกลางแจ้ง, มหาวิทยาลัยศรีปทุม
          </li>
          <li
            className="location-item"

          >
            🏢 อาคารD, มหาวิทยาลัยศรีปทุม
          </li>
          <li
            className="location-item"

          >
            🏢 อาคารT, มหาวิทยาลัยศรีปทุม
          </li>
        </ul>
      </div>

      {/* Footer Menu */}
      <div className="footer-menu">
        <button className="bi bi-house-door payment-icon">
          <br />
          Home
        </button>
        <button className="bi bi-qr-code payment-icon">
          <br />
          QR code
        </button>
        <button className="bi bi-calendar4 payment-icon">
          <br />
          Appointment
        </button>
        <button className="bi bi-bell payment-icon">
          <br />
          Notification
        </button>
      </div>
    </div>
  );
};

export default Checkpark;
