import React from "react";
import "./Notifications.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Notifications = () => {

  const navigate = useNavigate();

  const notifications = [
    { date: "21 สิงหาคม 2567", message: "คุณได้รับการ Appointment จากคลินิกสาขา อยู่เจน" },
    { date: "12 สิงหาคม 2567", message: "ชำระเงินสำเร็จ" },
    { date: "16 มิถุนายน 2567", message: "" },
    { date: "2 มิถุนายน 2567", message: "" },
  ];

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <div className="noti-arrow" onClick={() => navigate('/')}>
        <span className="bi bi-arrow-left-short"><span className="noti-text">การแจ้งเตือน</span></span> 
        </div>
      </div>
      <div className="notifications-list">
        {notifications.map((item, index) => (
          <div className="notification-item" key={index}>
            <div className="notification-date">{item.date}</div>
            {item.message && <div className="notification-message">{item.message}</div>}
          </div>
        ))}
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
};

export default Notifications;
