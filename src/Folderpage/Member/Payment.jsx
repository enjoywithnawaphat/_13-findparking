import React from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/promptpay');
  };



  return (
    <div className="payment-container">
      {/* Header */}
      <div className="payment-parking-header">
      <p className="bi bi-arrow-left-short" onClick={() => navigate('/receipt')} style={{marginLeft: '10px'}}></p>
        <h1 className="smart-parking-title">Smart Parking</h1>
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

      {/* Payment Buttons */}
      <div className="payment-methods">
      <button className="payment-button-qr" onClick={handlePayment} >
         <p className="bi bi-paypal" > QR Promptpay</p>
        </button>

        <button className="payment-button truemoney" >
          <img src="/truemoney.jpg" alt="" className="truemoney-logo" />
          TrueMoney Wallet
        </button>
      </div>


    </div>
  );
};

export default Payment;
