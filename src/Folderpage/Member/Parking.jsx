import './parking.css';
import { useNavigate } from 'react-router-dom';

function Parking() {
    const navigate = useNavigate();

    const goToHistory = () => {
        navigate('/'); 
    };

    return (
        <div className="parking-container">
            <header className="parking-header">
                <p className="back-button" onClick={goToHistory}><i className="bi bi-arrow-left-short"></i></p>
                <h1>Smart Parking</h1>
                <p>อาคาร A, มหาวิทยาลัยศรีปทุม</p>
            </header>
            <div className="parking-fee-section">
                <div className="fee-item">
                    <span>ค่าบริการ</span>
                    <span>0</span>
                </div>
                <div className="fee-item">
                    <span>ส่วนลด</span>
                    <span>0</span>
                </div>
                <div className="fee-total">
                    <span>ยอดชำระ</span>
                    <span>0</span>
                </div>
            </div>
            <div className="parking-details">
                <table style={{ width: '100%' }}>
                    <tr>
                        <td style={{ textAlign: 'left' }}>สถานะที่จอด</td>
                        <td style={{ textAlign: 'right' }}>อาคาร A, มหาวิทยาลัยศรีปทุม</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'left' }}>เลขที่บัตร</td>
                        <td style={{ textAlign: 'right' }}>72801</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'left' }}>วันที่/เวลาปัจจุบัน</td>
                        <td style={{ textAlign: 'right' }}>25/09/2024</td>
                    </tr>
                    <tr>
                        <td  style={{ textAlign: 'left' }}>จำนวนชั่วโมง</td>
                        <td style={{ textAlign: 'right' }}>-</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'left' }}>สิทธิ์ส่วนลด</td>
                        <td style={{ textAlign: 'right' }}>ตลอดวัน</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Parking;
