import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Sidebarv({setRolltoken ,name ,rolltoken}) {

  const navigate = useNavigate();
  
  const [showModal, setShowModal] = useState(false);
  const [qrImage, setQrImage] = useState("");

  const handleQrClick = (image) => {
    setQrImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setQrImage("");
  };

  const handleLogout = () => {
    setRolltoken(''); // เคลียร์ค่า rolltoken
    navigate('/')     // นำทางไปที่หน้า Login
         console.log('G')
  };

  

  return (
    <div className="container-sidebar">
      <label>
        <input type="checkbox" />
        <div className="toggle">
          <span className="top_line common"></span>
          <span className="middle_line common"></span>
          <span className="bottom_line common"></span>
        </div>

        <div className="slide"> 
            <NavLink
            to="/UserProfilev"
            >
          <div className="profile" >

            <span className="bi bi-person" style={{ fontSize: "35px" }}></span>
            <div className="user-Name">
              <span>{name}</span>
              <span>{rolltoken}</span>                   
            </div>       

          </div>
            </NavLink>
          <div className="line-under-profile"></div>

          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                หน้าแรก
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointmentv"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ประวัติการนัดหมาย
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/historyyv"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ประวัติการเข้าจอด
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/historyyv"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ประกาศ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/historyyv"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                วิธีใช้
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/historyyv"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ตั้งค่า
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutdevv"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                เกี่ยวกับผู้พัฒนา
              </NavLink>
            </li>

           
            <div className="line-over-signout"></div>
            <li className="signout">
              <button onClick={handleLogout} className="logout-click">
                <div className="text-in-btn"><span className="">ออกจากระบบ</span>
                <span className="bi bi-box-arrow-right" style={{marginLeft: '10px'}}></span></div>
              </button>
              
            </li>
          </ul>
        </div>
      </label>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={qrImage} alt="QR Code" />
          </div>
        </div>
      )}

      <div className="card-container" >
        <div className="head-card" onClick={() => navigate("/infov")}>
          <span className="bi bi-car-front-fill"></span>
          <div>
            <span>อาคาร A, มหาวิทยาลัยศรีปทุม</span>
            <br />
            <span>กจ 1123</span>
          </div>
        </div>
        <div className="Line-card"></div>

       <div className="body-card-container">
        <div className="body-card">
          <span>30 ส.ค. 2570</span>
          <br />
          <span style={{ fontWeight: "bold" }}>รอการชำระเงิน</span>
          <br />
          <span>เวลาเข้าจอด : 07:00</span>
          <br />
          <span>เวลาออกจอด : -</span>
        </div>
        <img
          src="./QR_code.png"
          onClick={() => handleQrClick("./QR_code.png")}
        />
        </div>
      </div>

      <div className="card-container">
        <div className="head-card">
          <span className="bi bi-car-front-fill"></span>
          <div>
            <span>อาคาร A, มหาวิทยาลัยศรีปทุม</span>
            <br />
            <span>กจ 1123</span>
          </div>
        </div>
        <div className="Line-card"></div>

       <div className="body-card-container">
        <div className="body-card">
          <span>30 ส.ค. 2570</span>
          <br />
          <span style={{ fontWeight: "bold" }}>รอการชำระเงิน</span>
          <br />
          <span>เวลาเข้าจอด : 07:00</span>
          <br />
          <span>เวลาออกจอด : -</span>
        </div>
        <img
          src="./QR_code.png"
          onClick={() => handleQrClick("./QR_code.png")}
        />
        </div>
      </div>

      <div className="search-parking-btn">
        <button onClick={(()=> navigate('/loadingv'))}>
          <span className="bi bi-search"></span>
          <span>ค้นหาลานจอดด้วย AI</span>
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

export default Sidebarv;
