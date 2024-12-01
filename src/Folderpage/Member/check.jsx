import React from "react";
import { useNavigate } from "react-router-dom";
import "./Check.css";

function Check() {
  const navigate = useNavigate();

  return (
    <div className="check-container">
      {/* ปุ่มย้อนกลับ */}
      <div className="check-back">
        <span className="bi bi-arrow-left-short" onClick={() => navigate('/appointment')} ></span>
      </div>

      {/* ผู้นัดหมาย */}
      <div className="check-header">
        <p>ผู้นัดหมาย : สมชาย อยู่ยืน</p>
      </div>

      {/* รายละเอียดวัน เวลา สถานที่ */}
      <div className="check-details">
        <p>วันที่ 11 / 8 / 2570</p>
        <p>อาคาร A, มหาวิทยาลัยศรีปทุม</p>
        <p>7:00 - 12:00</p>
      </div>

      {/* คำอธิบาย */}
      <div className="check-explain">
        <h3>Explain</h3>
        <p>นัดหมายการพูดคุย เรื่องธุรกิจ</p>
      </div>
    </div>
  );
}

export default Check;
