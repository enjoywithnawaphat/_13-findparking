import React from "react";
import "./Receipt.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Receipt = () => {

    const navigate = useNavigate();

    const handleReceipt = () => {
    navigate('/payment');
  };
  return (
    <div className="smart-parking">
      {/* Header */}
      <div className="smart-parking-header">
        <h1 >Smart Parking</h1>
      </div>

      {/* Summary */}
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

      {/* Parking Details */}
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
              <td>25/09/2024</td>
            </tr>
            <tr>
              <td>วันที่/เวลาปัจจุบัน</td>
              <td>25/09/2024</td>
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

      {/* Pay Button */}
      <button className="pay-button" onClick={handleReceipt}>ชำระเงิน</button>

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
};

export default Receipt;
