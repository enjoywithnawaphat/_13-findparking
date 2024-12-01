import React, { useState } from 'react';
import './ParkingList.css';
import { useNavigate } from 'react-router-dom';

function ParkingList() {
  const [ setSearchText] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handlePreRegister = () => {
    setShowSuccessPopup(true); // เปิด Popup
    setTimeout(() => {
      setShowSuccessPopup(false); // ปิด Popup อัตโนมัติหลัง 2 วินาที
      navigate("/");
    }, 2000);
  };
  
  

  const navigate = useNavigate();



  const handleSearch = () => {
    navigate('/Park');
  };
 

  const locations = [
    { id: 1, name: 'อาคารA, มหาวิทยาลัยศรีปทุม' },
    { id: 2, name: 'อาคารB, มหาวิทยาลัยศรีปทุม' },
    { id: 3, name: 'ลานกลางแจ้ง, มหาวิทยาลัยศรีปทุม' },
    { id: 4, name: 'อาคารD, มหาวิทยาลัยศรีปทุม' },
    { id: 5, name: 'อาคารT, มหาวิทยาลัยศรีปทุม' },
  ];

  

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSelectLocation = (id) => {
    setSelectedLocation(id);
  };

  return (
    <div className="parkinglist-container">
      <div className='parkinglist-box'>
        <div className='parkinglist-arrow'>
    <p className='bi bi-arrow-left-short' style={{paddingTop: "10%"}} onClick={() => navigate('/appointmentForm')}></p>
        </div>

      <h3 style={{fontWeight: "bold"}}>รายการจอดรถ</h3>
      <div className="location-list">
        {locations.map((location) => (
          <div
            key={location.id}
            className={`location-item ${selectedLocation === location.id ? 'selected' : ''}`}
            onClick={() => handleSelectLocation(location.id)}
          >
            <span className="bi bi-geo-alt"></span>
            <span className="location-name">{location.name}</span>
          </div>
        ))}
      </div>
      <button className="pre-register-button" onClick={handlePreRegister}>
  Pre-Register
</button>
    </div>

    {showSuccessPopup && (
  <div className="success-popup">
    <div className="success-popup-content">
      <div className="success-icon">✔</div>
      <p>Successfully<br />Registered</p>
    </div>
  </div>
)}


  </div>
)};




export default ParkingList;
