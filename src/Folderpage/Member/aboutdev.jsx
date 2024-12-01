import "./aboutdev.css";
import { NavLink } from "react-router-dom";

function Aboutdev() {
  return (
    <div className="aboutdev-container">
   
      <div className="group-list">
        <div className="night-container">
          <img src="./night.png"></img>
          <span>นายนวพรรษ ทองสุก</span>
          <span>รหัสนักศึกษา : 66069963</span>
        </div>

        <div className="night-container">
          <img src="./dan.png"></img>
          <span>นายนรวัฒน์ ดูการดี</span>
          <span>รหัสนักศึกษา : 66080795</span>
        </div>

        <div className="night-container">
          <img src="./oom.jpg"></img>
          <span>นางสาว ศุภาวีร์ ภู่สว่าง</span>
          <span>รหัสนักศึกษา : 66074931</span>
        </div>

        <div className="night-container">
          <img src="./sun.jpg"></img>
          <span>นายชำนาญ เกษมสัตย์</span>
          <span>รหัสนักศึกษา : 66073998</span>
        </div>
      </div>

      <div className="menubarM">
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
            to="/Notifications"
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

export default Aboutdev;
