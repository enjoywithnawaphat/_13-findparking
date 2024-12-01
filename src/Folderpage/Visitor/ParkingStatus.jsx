import React, { useState } from "react";
import "./ParkingStatus.css"; // นำเข้าไฟล์ CSS

const ParkingAvailabilityv = () => {
  const [date, setDate] = useState("2024-11-23");
  const [timeFrom, setTimeFrom] = useState("12:00");
  const [timeTo, setTimeTo] = useState("13:00");

  const percentage = 70; // เปอร์เซ็นต์ที่จอดรถ
  const current = 805; // จำนวนรถที่จอดแล้ว
  const total = 1275; // จำนวนช่องจอดทั้งหมด

  // การคำนวณกราฟวงกลม
  const radius = 50;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="container">
      {/* ปุ่มย้อนกลับ */}
      <div className="back-button">←</div>

      {/* ส่วนเลือกวันที่และเวลา */}
      <div className="date-time-picker">
        <div className="date-picker">
          <label>
            วันที่:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div className="time-picker">
          <label>
            From:
            <input
              type="time"
              value={timeFrom}
              onChange={(e) => setTimeFrom(e.target.value)}
            />
          </label>
          <span className="time-separator">To</span>
          <label>
            <input
              type="time"
              value={timeTo}
              onChange={(e) => setTimeTo(e.target.value)}
            />
          </label>
        </div>
      </div>

      {/* ส่วนแสดงข้อมูล */}
      <div className="card">
        <div className="card-header">
          <span className="location-icon">📍</span>
          <h3 className="card-title">อาคาร A, มหาวิทยาลัยศรีปทุม</h3>
        </div>
        <p>เปิด: 06:00 - 19:00</p>
        <p>วันที่: {date}</p>
        <p>เวลา: {timeFrom} - {timeTo}</p>

        {/* กราฟวงกลม */}
        <div className="graph">
          <svg className="graph-svg">
            <circle
              className="graph-circle"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              className="graph-progress"
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
          </svg>
          <div className="graph-text">
            <div className="graph-percentage">{percentage}%</div>
            <div className="graph-detail">{current}/{total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingAvailabilityv;
