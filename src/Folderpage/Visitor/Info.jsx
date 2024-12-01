import React, { useState, useEffect } from "react";
import "./Info.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Infov = () => {
    const navigate = useNavigate();

    // State สำหรับการนับถอยหลัง
    const [seconds, setSeconds] = useState(5); // เริ่มต้นที่ 30 วินาที
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); // ปุ่มกดไม่ได้ขณะนับถอยหลัง

    useEffect(() => {
        // ถ้าเวลายังไม่หมดให้ลดเวลาลงทุก ๆ 1 วินาที
        if (seconds > 0) {
            const timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
            return () => clearInterval(timer); // ล้าง interval เมื่อ component ถูก unmount
        } else {
            setIsButtonDisabled(false); // ปลดล็อกปุ่มเมื่อหมดเวลา
        }
    }, [seconds]);

    const handleButtonClick = () => {
        navigate('/'); // ตัวอย่างการนำทาง
    };

    return (
        <div className="smart-parking">
            {/* ส่วนหัว */}
            <div className="smart-parking-header">
                <h1 className="smart-parking-title">Smart Parking</h1>
            </div>

            {/* สรุปยอดการชำระเงิน */}
            <div className="payment-summary">
                <table className="summary-table">
                    <tbody>
                        <tr>
                            <td>ค่าบริการ</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>ส่วนลด</td>
                            <td>0</td>
                        </tr>
                        <tr className="total-row">
                            <td>ยอดชำระ</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* รายละเอียดการจอดรถ */}
            <div className="parking-details">
                <table className="details-table">
                    <tbody>
                        <tr>
                            <td>สถานที่จอด</td>
                            <td>อาคาร A, มหาวิทยาลัยศรีปทุม</td>
                        </tr>
                        <tr>
                            <td>เลขที่บัตร</td>
                            <td>72801</td>
                        </tr>
                        <tr>
                            <td>วันที่/เวลาเข้า</td>
                            <td>30 ส.ค. 2570</td>
                        </tr>
                        <tr>
                            <td>วันที่/เวลาปัจจุบัน</td>
                            <td>30 ส.ค. 2570</td>
                        </tr>
                        <tr>
                            <td>จำนวนชั่วโมง</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>สิทธิ์ส่วนลด</td>
                            <td>ตลอดวัน</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* ปุ่มชำระเงิน */}
            <button
                className="pay-button"
                onClick={handleButtonClick}
                disabled={isButtonDisabled}
                style={{
                    backgroundColor: isButtonDisabled ? "#FFCCBC" : "#FF7043", // สีส้มอ่อนขณะถอยหลัง และส้มเข้มเมื่อกดได้
                    cursor: isButtonDisabled ? "not-allowed" : "pointer", // เปลี่ยน cursor
                    color: isButtonDisabled ? "#000" : "#FFF", // สีข้อความ
                }}
            >
                {isButtonDisabled ? `Refreshing in ${seconds} seconds` : "Back to home page"}
            </button>

            {/* เมนูส่วนล่าง */}
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
};

export default Infov;
