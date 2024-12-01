import './qrscan.css'
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Qrscan() {
    const navigate = useNavigate();


    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/info'); 
        }, 2000);


        return () => clearTimeout(timer);
    }, [navigate]);

    return ( 
        <div className='Qr-container'>
           <div className='Qr-header'>
                <span>สแกน QR code</span>
            </div>
            
            <div className='Qr-img'>
                <img src='./ScanQR.png' alt="QR Scanner" />
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

export default Qrscan;
