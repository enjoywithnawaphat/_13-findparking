import React, { useState, useEffect } from "react";
import "./Promptpay.css";
import { useNavigate } from "react-router-dom";

const Promptpayv = () => {
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState(10); 
  const [popupStatus, setPopupStatus] = useState(null); // สถานะป๊อปอัป: null, "success", "failure"
  const [successShown, setSuccessShown] = useState(false); // ตรวจสอบว่าชำระเงินเสร็จสิ้นแสดงหรือยัง

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      if (timeLeft === 7 && !successShown) {
        setPopupStatus("success");
        setSuccessShown(true); // ป้องกันไม่ให้แสดงซ้ำ
        setTimeout(() => {
          setPopupStatus(null);
        }, 2000); //
      }

      return () => clearInterval(timer); // ล้าง interval เมื่อ component ถูก unmount
    } else {
      // เมื่อเวลาหมด
      setPopupStatus("failure"); 


      setTimeout(() => {
        setPopupStatus(null); // ปิดป๊อปอัป
        navigate("/");
      }, 2000);
    }
  }, [timeLeft, popupStatus, successShown, navigate]);


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleGoBack = () => {
    navigate(-1); // กลับไปหน้าก่อนหน้า
  };

  return (
    <div className="promptpay-container">
      <div className="promptpay-header">
      <div className="promptpay-back">
              <p className="bi bi-arrow-left-short" onClick={handleGoBack} ></p>
      </div>

<div className="promptpay-text">
      <h1 className="promptpay-title">QR Promptpay</h1>

      <div className="qr-section">
        <img src="/promptpay.png" className="qr-image" alt="QR Promptpay" />
      </div>

      <p className="countdown">
        {timeLeft > 0 ? formatTime(timeLeft) : "00:00"}
      </p>
<div className="promptpay-save-button-container">
      <button className="save-button">บันทึกรูปภาพ</button>
</div>
      {popupStatus && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div
              className={`popup-icon ${
                popupStatus === "success" ? "success" : "failure"
              }`}
            >
              {popupStatus === "success" ? "✔" : "✘"}
            </div>
            <p className="popup-text">
              {popupStatus === "success"
                ? "ชำระเงินเสร็จสิ้น\n\nขอบคุณที่ใช้บริการ"
                : "ชำระเงินล้มเหลว\n\nกรุณาลองอีกครั้ง"}
            </p>
          </div>
        </div>
      )}
      </div>
      </div>
    </div>
  );
};

export default Promptpayv;
