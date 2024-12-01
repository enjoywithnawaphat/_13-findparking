import "./App.css";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route , HashRouter } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// member file
import LoginScreen from "./Folderpage/Member/Login";
import OTPPage from "./Folderpage/Member/OTP";
import Receipt from "./Folderpage/Member/Receipt";
import Payment from "./Folderpage/Member/Payment";
import Signup from "./Folderpage/Member/Signup";
import Line from "./Folderpage/Member/Line";
import Info from "./Folderpage/Member/Info";
import Promptpay from "./Folderpage/Member/Promptpay";
import AddCar from "./Folderpage/Member/addCar";
import Start from "./Folderpage/Member/Start";
import Sidebar from "./Folderpage/Member/sidebar";
import Loading from "./Folderpage/Member/loading";
import QRscan from "./Folderpage/Member/qrscan";
import UserProfile from "./Folderpage/Member/UserProfile";
import Notifications from "./Folderpage/Member/Notifications";
import AppointmentForm from "./Folderpage/Member/AppointmentForm";
import ParkingList from "./Folderpage/Member/ParkingList";
import History from "./Folderpage/Member/historyy";
import Appointment from "./Folderpage/Member/appointment";
import Check from "./Folderpage/Member/check";
import Parking from "./Folderpage/Member/Parking";
import Park from "./Folderpage/Member/Park";
import Aboutdev from "./Folderpage/Member/aboutdev";


// visitor file
import Sidebarv from "./Folderpage/Visitor/sidebar"
import Startv from "./Folderpage/Visitor/Start";
import UserProfilev from "./Folderpage/Visitor/UserProfile";
import Appointmentv from "./Folderpage/Visitor/appointment";
import Parkv from "./Folderpage/Visitor/Park";
import Parkingv from "./Folderpage/Visitor/Parking";
import Historyv from "./Folderpage/Visitor/historyy";
import Checkv from "./Folderpage/Visitor/check";
import Receiptv from "./Folderpage/Visitor/Receipt";
import Paymentv from "./Folderpage/Visitor/Payment";
import Infov from "./Folderpage/Visitor/Info";
import Loadingv from "./Folderpage/Visitor/loading";
import QRscanv from "./Folderpage/Visitor/qrscan";
import Promptpayv from "./Folderpage/Visitor/Promptpay";
import Notificationsv from "./Folderpage/Visitor/Notifications";
import Aboutdevv from "./Folderpage/Visitor/aboutdev";



function App() {
  const usersRef = useRef([]); // เก็บข้อมูลผู้ใช้ใน useRef

  // อยากเช็ค หน้า member หรือ visitor ให้พิมพ์ใส่ rolltoken ได้เลย ชื่อ roll มี member กับ visitor
  const [rolltoken, setRolltoken] = useState("");

  const [name , setName] = useState("User");
  const [lastname , setLastname] = useState("");
  const [phone , setPhone] = useState("");
  const [pass , setPass] = useState("");

  // useEffect(() => {
  //   if(rolltoken === ' '){
  //     setRolltoken(rolltoken);
  //   }
  // }, []);

  

  return (
    <div>
      
      <HashRouter>
      
        <Routes>
          {/* Routes สำหรับกรณีที่ยังไม่ได้เข้าสู่ระบบ */}
          {rolltoken === "" && (
            <>
              <Route path="/" element={<LoginScreen userdata={usersRef} setRolltoken={setRolltoken} setName={setName} setLastname={setLastname} setPhone={setPhone} setPass={setPass} />} />
              <Route path="/LoginScreen" element={<LoginScreen userdata={usersRef} setRolltoken={setRolltoken} setName={setName} setLastname={setLastname} setPhone={setPhone} setPass={setPass} />} />
              <Route path="/signup" element={<Signup usersRef={usersRef} />} />
              <Route path="/otp" element={<OTPPage />} />
              <Route path="/line" element={<Line  />} />
              <Route path="/start" element={<Start setRolltoken={setRolltoken}/>} />
              

            </>
          )}

          {/* Routes สำหรับกรณีที่เป็น member */}
          {rolltoken === 'member' && (
            <>
              
              <Route path="/" element={<Sidebar setRolltoken={setRolltoken} setName={setName} name={name} rolltoken={rolltoken} />} />
              <Route path="/receipt" element={<Receipt />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/info" element={<Info />} />
              <Route path="/promptpay" element={<Promptpay />} />
              <Route path="/addCar" element={<AddCar />} />
              <Route path="/loading" element={<Loading />} />
              <Route path="/qrscan" element={<QRscan />} />
              <Route path="/userprofile" element={<UserProfile name={name} lastname={lastname} phone={phone} pass={pass} />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/appointmentForm" element={<AppointmentForm />} />
              <Route path="/parkinglist" element={<ParkingList />} />
              <Route path="/historyy" element={<History />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/check" element={<Check />} />
              <Route path="/parking" element={<Parking />} />
              <Route path="/park" element={<Park />} />
              <Route path="/aboutdev" element={<Aboutdev />} />
            </>
          )}

          {/* Routes สำหรับกรณีที่เป็น visitor */}
          {rolltoken === 'visitor' && (
            <>
            
              <Route path="/" element={<Sidebarv setRolltoken={setRolltoken} setName={setName} name={name} rolltoken={rolltoken} />} />
              <Route path="/receiptv" element={<Receiptv />} />
              <Route path="/paymentv" element={<Paymentv />} />
              <Route path="/infov" element={<Infov />} />
              <Route path="/promptpayv" element={<Promptpayv />} />
              <Route path="/loadingv" element={<Loadingv />} />
              <Route path="/qrscanv" element={<QRscanv />} />
              <Route path="/userprofilev" element={<UserProfilev name={name} lastname={lastname} phone={phone} pass={pass} />} />
              <Route path="/notificationsv" element={<Notificationsv />} />
              <Route path="/historyyv" element={<Historyv />} />
              <Route path="/appointmentv" element={<Appointmentv />} />
              <Route path="/checkv" element={<Checkv />} />
              <Route path="/parkingv" element={<Parkingv />} />
              <Route path="/parkv" element={<Parkv />} />
              <Route path="/aboutdevv" element={<Aboutdevv />} />

             
            </>
          )}


          
          <Route path="*" element={<LoginScreen />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
