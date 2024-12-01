
import React from 'react';
import './Line.css';
import { useNavigate } from 'react-router-dom';

function Line({setRolltoken}) {


    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/start');
        
    }

    

    return (
        <div className="layer">
            <p className='color'>LINE</p>
            
            <input type="text" placeholder="อีเมล" /> <br />
            <input type="password" placeholder="รหัสผ่าน" />
            
            <button className='login btn btn-outline-success'  type="button" onClick={handleStart}>เข้าสู่ระบบ</button> <br />
            <button>เข้าสู่ระบบด้วยคิวอาร์โค้ด</button>
            
            <a href="#" className="link">ลืมอีเมลหรือรหัสผ่าน?</a>
            
            <div className="footer">
                <span style={{ marginRight: "3rem" , marginLeft: "-3rem"}}>เกี่ยวกับ Line</span>
                <span style={{ marginRight: "3rem" , marginLeft: "4rem"}}>นโยบายความเป็นส่วนตัว</span>
                <span style={{ marginRight: "3rem" , marginLeft: "4rem"}}>ข้อกำหนดการใช้นโยบาย</span>
            </div>
        </div>
    );
}

export default Line;