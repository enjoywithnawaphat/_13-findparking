import './qrscan.css'
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Qrscanv() {
    const navigate = useNavigate();


    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/Receiptv'); 
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

            <div className="menubarv">
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
                        to="/qrscanv"
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
                        to="/notificationsv"
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

export default Qrscanv;
