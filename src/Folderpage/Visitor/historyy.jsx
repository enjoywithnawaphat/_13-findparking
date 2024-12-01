import './historyy.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // นำเข้า Link ที่ถูกต้อง
import { NavLink } from 'react-router-dom';

function Historyv() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="history-container">

                <h4>History</h4>
        <div className="history-box">
            <div className="history-list">
                {/* รายการเริ่มต้น */}
                <div className="history-item">
                    <i className="bi bi-car-front-fill history-icon"></i>
                    <div className="history-item-text">
                        <div>อาคาร A, มหาวิทยาลัยศรีปทุม</div>
                        <span>31 ส.ค. 2570, เวลา 9:01</span>
                    </div>
                </div>
                <div className="history-item">
                    <i className="bi bi-car-front-fill history-icon"></i>
                    <Link to="/Parkingv" className="history-item-text" style={{ textDecoration: 'none' }}>
                        <div>อาคาร A, มหาวิทยาลัยศรีปทุม</div>
                        <span>31 ส.ค. 2570, เวลา 9:01</span>
                    </Link>
                </div>
                <div className="history-item">
                    <i className="bi bi-car-front-fill history-icon"></i>
                    <div className="history-item-text">
                        <div>อาคาร B, มหาวิทยาลัยศรีปทุม</div>
                        <span>31 ส.ค. 2570, เวลา 10:30</span>
                    </div>
                </div>
                <div className="history-item">
                    <i className="bi bi-car-front-fill history-icon"></i>
                    <div className="history-item-text">
                        <div>อาคาร C, มหาวิทยาลัยศรีปทุม</div>
                        <span>31 ส.ค. 2570, เวลา 11:00</span>
                    </div>
                </div>
                {/* รายการเพิ่มเติม แสดง/ซ่อนตาม isVisible */}
                {isVisible && (
                    <>
                        <div className="history-item">
                            <i className="bi bi-car-front-fill history-icon"></i>
                            <div className="history-item-text">
                                <div>อาคาร B, มหาวิทยาลัยศรีปทุม</div>
                                <span>31 ส.ค. 2570, เวลา 10:30</span>
                            </div>
                        </div>
                        <div className="history-item">
                            <i className="bi bi-car-front-fill history-icon"></i>
                            <div className="history-item-text">
                                <div>อาคาร C, มหาวิทยาลัยศรีปทุม</div>
                                <span>31 ส.ค. 2570, เวลา 11:00</span>
                            </div>
                        </div>
                        <div className="history-item">
                            <i className="bi bi-car-front-fill history-icon"></i>
                            <div className="history-item-text">
                                <div>อาคาร B, มหาวิทยาลัยศรีปทุม</div>
                                <span>31 ส.ค. 2570, เวลา 10:30</span>
                            </div>
                        </div>
                        <div className="history-item">
                            <i className="bi bi-car-front-fill history-icon"></i>
                            <div className="history-item-text">
                                <div>อาคาร C, มหาวิทยาลัยศรีปทุม</div>
                                <span>31 ส.ค. 2570, เวลา 11:00</span>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <button className="load-more" onClick={toggleVisibility}>
                {isVisible ? "ซ่อนรายการเพิ่มเติม" : "แสดงเพิ่มเติม"}
            </button>
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
            to="/Notificationsv"
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

export default Historyv;
