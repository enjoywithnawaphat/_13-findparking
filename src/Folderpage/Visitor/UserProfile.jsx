import React from "react";
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
const UserProfilev = ({name , lastname , phone , pass}) => {

  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <div className="user-profile">
      {/* ปุ่มย้อนกลับ */}
      <div className="user-arrow" onClick={() => navigate('/')}>
        <p className="bi bi-arrow-left-short"></p>
      </div>

      {/* ชื่อหน้า */}
      <h1 className="profile-title">Your Profile</h1>

      {/* ไอคอนโปรไฟล์ */}
      <div className="profile-icon">
        <div className="icon-circle">
          <span className="icon">👤</span>
        </div>
      </div>

      {/* ข้อมูลผู้ใช้ */}
      <div className="form-container">
        <div className="form-group">
          <label>First name</label>
          <input type="text" value={name} disabled />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input type="text" value={lastname} disabled />
        </div>
        <div className="form-group">
          <label>Phone number</label>
          <input type="text" value={phone} disabled />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={pass} disabled />
        </div>
      </div>

      {/* ปุ่มแก้ไข */}
      <button className="edit-button-profile" onClick={() => navigate('/')}>Edit Profile</button>
    </div>
    </div>
  );
};

export default UserProfilev;
