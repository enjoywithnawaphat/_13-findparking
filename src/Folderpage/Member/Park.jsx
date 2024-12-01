import React, { useState } from "react";
import "./Park.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Park() {
  const navigate = useNavigate();

  const locations = [
    { id: 1, name: "อาคารA, มหาวิทยาลัยศรีปทุม" },
    { id: 2, name: "อาคารB, มหาวิทยาลัยศรีปทุม" },
    { id: 3, name: "ลานกลางแจ้ง, มหาวิทยาลัยศรีปทุม" },
    { id: 4, name: "อาคารD, มหาวิทยาลัยศรีปทุม" },
    { id: 5, name: "อาคารT, มหาวิทยาลัยศรีปทุม" },
  ];

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [parkingPercent, setParkingPercent] = useState(0);

  const generateParkingPercent = () => {
    const randomPercent = Math.floor(Math.random() * 101); // สุ่มเปอร์เซ็นต์
    setParkingPercent(randomPercent);
  };
  

  

  const handleSelectLocation = (id) => {
    setSelectedLocation(id);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      generateParkingPercent(); // อัปเดตเปอร์เซ็นต์
      setShowPopup(true);
    }, 3000);
  };
  

  return (
    <div className="park-container">
      <div className="nongsun-arrow">
        <p
          className="bi bi-arrow-left-short"
          onClick={() => navigate("/")}
        ></p>
      </div>
      <div className="park-search">
        <input
          type="date"
          style={{
            paddingLeft: "1rem",
            marginBottom: "1rem",
            borderRadius: "10px",
            height: "2rem",
          }}
        />            <br/>
        <span>
          <span className="park-time" style={{ marginRight: "1rem" }}>
            <input
              type="time"
              style={{
                paddingLeft: "1rem",
                width: "8rem",
                borderRadius: "10px",
                height: "2rem",
              }}
            />

          </span>
          <span className="to-text" style={{ marginLeft: "0.5rem" }}>
            To
          </span>
          <span>
            <input
              type="time"
              style={{
                paddingLeft: "1rem",
                width: "8rem",
                margin: "1rem",
                marginRight: "1rem",
                marginLeft: "1.5rem",
                borderRadius: "10px",
                height: "2rem",
              }}
            />
          </span>
        </span>

        <div>
          <p
            style={{
              textAlign: "left",
              marginLeft: "1rem",
              fontWeight: "bold",
            }}
          >
            รายการค้นหาลานจอด
          </p>
        </div>
        <div className="location-list">
          {locations.map((location) => (
            <div
              key={location.id}
              className={`location-item ${
                selectedLocation === location.id ? "selected" : ""
              }`}
              onClick={() => handleSelectLocation(location.id)}
            >
              <span className="bi bi-geo-alt"></span>
              <span className="location-name">{location.name}</span>
            </div>
          ))}
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

      {loading && (
        <div className="loading-overlay">
          <img src="./loading.gif" alt="Loading" className="park-loading-img" />
        </div>
      )}

{showPopup && (
  <div className="popup">
    <div className="popup-content">
      <h3 style={{textAlign: "center"}}>ข้อมูลสถานที่
        <br/>


      </h3>        
      <h5>
                          สถานที่ที่เลือก:{" "}
        {locations.find((loc) => loc.id === selectedLocation)?.name}
        </h5>
      <div
        className="circle"
        style={{
          background: `conic-gradient(            
          #f07942  ${parkingPercent}%,
          #F2F2E6 ${parkingPercent}%

          )`,
        }}
      >
        <p style={{fontSize: "1rem"}}>{parkingPercent}%</p>
      </div>
      <button onClick={() => setShowPopup(false)}>ปิด</button>
    </div>
  </div>
)}



    </div>
  );
}

export default Park;
