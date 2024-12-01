import './appointment.css';
import { Link } from 'react-router-dom'; // นำเข้า Link ที่ถูกต้อง
import { NavLink } from 'react-router-dom';

function Appointmentv() {
    
    return (
        <div className="history-container">
            <div className="history-box">
            <div className="history-header">

             <h4>
                History Appointment
             </h4>
            </div>
            <div className="history-list">
                {/* รายการเริ่มต้น */}
                <div className="history-item">
                <i className="bi bi-calendar"></i>
                    <div className="history-item-text">
                        <div className='item'>อาคาร A, มหาวิทยาลัยศรีปทุม</div>
                        <span>31 ส.ค. 2570, เวลา 9:01</span>
                    </div>
                </div>
                <div className="history-item">
                <i className="bi bi-calendar"></i>
                    <Link to="/Checkv" className="history-item-text" style={{ textDecoration: 'none' }}>
                        <div className='item'>อาคาร A, มหาวิทยาลัยศรีปทุม</div>
                        <span>31 ส.ค. 2570, เวลา 9:01</span>
                    </Link>
                </div>
                <div className="history-item">
                <i className="bi bi-calendar"></i>
                    <div className="history-item-text">
                        <div  className='item'>อาคาร B, มหาวิทยาลัยศรีปทุม</div>
                        <span>31 ส.ค. 2570, เวลา 10:30</span>
                    </div>
                </div>
                <div className="history-item">
                <i className="bi bi-calendar"></i>
                    <div className="history-item-text">
                        <div className='item'>อาคาร C, มหาวิทยาลัยศรีปทุม</div>
                        <span>31 ส.ค. 2570, เวลา 11:00</span>
                    </div>
                </div>
                
            </div>

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

export default Appointmentv;
