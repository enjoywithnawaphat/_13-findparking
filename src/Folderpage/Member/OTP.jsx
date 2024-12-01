import React, { useState } from 'react';
import './OTP.css';
import { useNavigate } from 'react-router-dom';

function OTPPage() {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate('/signup');
  }

  const handleStart = () => {
    navigate('/');
  };
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input field if a digit is entered
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    console.log("OTP Code:", otpCode); // แสดงผล OTP ที่กรอกทั้งหมด
    // ส่ง OTP Code ไปที่ Backend หรือทำสิ่งที่ต้องการ
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <p className="otp-title">ลงทะเบียน</p>
        <h2 className="otp-subtitle">รหัสยืนยันตัวตน</h2>
        <p className="otp-description">
          เราจะส่งรหัสยืนยันตัวตนให้คุณแล้วที่หมายเลข <strong>+66892345678</strong>
          <span className="otp-link"> ต้องการเปลี่ยนหมายเลข?</span>
        </p>
        <div className="otp-inputs">
          {otp.map((_, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="tel"
              maxLength="1"
              className="otp-input"
              inputMode="numeric"
              pattern="[0-9]*"
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        <p className="otp-resend">
          ไม่ได้รับรหัส? <span className="otp-link">กดที่นี่เพื่อรับรหัสอีกครั้ง</span>
        </p>
        <div className="otp-buttons">
          <button className="otp-cancel" onClick={handleSignup}>ยกเลิก</button>
          <button className="otp-confirm" onClick={handleStart}>ยืนยัน</button>
        </div>
      </div>
    </div>
  );
}

export default OTPPage;
