import './start.css';
import React from "react";
import { useNavigate } from "react-router-dom";

function Startv() {

    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/');
    }


    return (
        <div className="container">
            <div className="logo"> {/* โครงสร้างสำหรับโลโก้ */}
                <span className="logo-text">
                    <img src="./metthier.png" alt="Company Logo" className='start-logo'/> 
                </span>
            </div>
            <p className="message">สมัครบัญชีเรียบร้อย</p>
            <button className="confirm-button" onClick={handleStart} >เริ่มต้นใช้งาน</button>
        </div>
    );
}

export default Startv;