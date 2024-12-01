import './loading.css'
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Loading() {
    const navigate = useNavigate();


    useEffect (() => {
        setTimeout(() => {
          navigate("/park");
        }, 1000);
      }, []);


    return ( 
        <div className='loading-container'>
          <div className='loading-box'>

            <div className='loading-img'>
                <img src='./loading.gif' />
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
            to="/a"
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
            to="/a"
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
            to="/a"
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

export default Loading;