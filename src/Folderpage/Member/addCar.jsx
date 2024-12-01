import "./addCar.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { carData } from "../../cardata";
import { NavLink } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Addcar() {
  const [Checked, setChecked] = useState(true);
  const [carRawData, setCarRawData] = useState([]);
  
  // keep data form input here
  const carNum = useRef();
  const addressCar = useRef();

  const editNum = useRef();
  const editAddress = useRef();

  // เก็บ ID ของรายการที่ต้องการแก้ไข
  const keepDataID = useRef();

  // ฟังก์ชันเก็บ ID ของรายการที่ต้องการแก้ไข
  function keepdata(id) {
    keepDataID.current = id;
  }

  function changeBtnState() {
    setChecked(!Checked);
  }

  useEffect(() => {
    setCarRawData(carData());
  }, []);

  useEffect(() => {
    // console.log(carRawData);
  }, [carRawData]);

  // ฟังก์ชันเพิ่มรถใหม่
  function addNewCar() {
    const carReg = carNum.current?.value;
    // if (!carReg || carReg === "") return alert("กรุณาใส่หมายเลขทะเบียน");

    if(carNum.current.value === '') {
      alert("กรุณาใส่หมายเลขทะเบียน");
      return;
    }

    if(addressCar.current.value === ''){
      alert("กรุณาใส่จังหวัด");
      return;
    }
   

    // ตรวจสอบหมายเลขทะเบียนและจังหวัดซ้ำ
    if (carRawData.find((item) => item.Car_registration === carReg) && carRawData.find((item) => item.car_address === addressCar.current.value)) {
      alert("หมายเลขทะเบียนซ้ำ");
      carNum.current.value = "";
      addressCar.current.value = "";
      return;
    }

    

    const newCar = {
      id: carRawData.length + 1,
      Car_registration: carReg,
      car_address: addressCar.current.value,
    };

    setCarRawData([...carRawData, newCar]);
    carNum.current.value = "";
    addressCar.current.value = "";
  }

  // ฟังก์ชันลบรถ
  function deleteCar(id) {
    setCarRawData(carRawData.filter((data) => data.id !== id));
  }

  // ฟังก์ชันแก้ไขหมายเลขทะเบียน
  function changeCar() {
    const newCarReg = editNum.current.value;
    const addressCar = editAddress.current.value

    // ตรวจสอบหมายเลขทะเบียนซ้ำในรายการทั้งหมด
    if (carRawData.find((item) => item.Car_registration === newCarReg && item.car_address === addressCar)) {
      return alert("หมายเลขทะเบียนซ้ำ");
    }

    setCarRawData(
      carRawData.map((data) => {
        if (data.id === keepDataID.current) {

          // ตรวจสอบช่อง Input ว่าว่างไหม ถ้าว่างให้ใช้ค่าเดิม
          if(newCarReg === ""){
            data.Car_registration = data.Car_registration;
          }
          else{
            data.Car_registration = newCarReg;
          }

          if(addressCar === "") {
            data.car_address = data.car_address
          }
          else{
            data.car_address = addressCar
          }
          
        }
        return data;
      })
    );
  }


  const [checkedCount, setCheckedCount] = useState(0);

  function handleCheckboxChange(event) {
    const isChecked = event.target.checked;
    if (isChecked && checkedCount >= 2) {
      alert("เลือกได้สูงสุดเพียง 2 รายการเท่านั้น");
      event.target.checked = false;
      return;
    }
  
    setCheckedCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));
  }
  // disabled={checkedCount >= 2}

  // form react bootstrap
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-addcar">
      <div className="second-container">
        
      {/* modal bootstrap */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>แก้ไขหมายเลขทะเบียน</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body">
          <input
            type="text"
            placeholder="ใส่หมายเลขทะเบียน"
            ref={editNum}
            autoFocus
          />
        </Modal.Body>
        <Modal.Body className="modal-body">
          <input
            type="text"
            placeholder="ใส่จังหวัด"
            ref={editAddress}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ backgroundColor: "#FD6E2B" , border:"none"}}
            variant="primary"
            onClick={() => {
              handleClose();
              changeCar();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* HeadText */}
      <div className="addcarHeadText">
        <Link to="/" style={{ color: "black" }}>
        <span className="bi bi-arrow-left-short" style={{fontSize: '2rem' , marginLeft: '-18rem' }}></span>
        </Link>
        <p style={{marginTop: '4rem'}}>เพิ่มหมายเลขทะเบียน</p>
        <span></span>
      </div>

      {/* inputbox */}
      <div className="input-container-addcar">
        <div className="input-addcar">
          <input
            type="text"
            placeholder="ใส่หมายเลขทะเบียน"
            ref={carNum}
            autoFocus
          />
        </div>

        <div className="input-address">
          <input
            list="browsers"
            name="browser"
            id="browser"
            placeholder="ใส่จังหวัด"
            ref={addressCar}
            
          />
          <datalist id="browsers">
            <input type="text" placeholder="ใส่หมายเลขทะเบียน" />
            <option value="กรุงเทพมหานคร" />
            <option value="ปทุมธานี" />
            <option value="นนทบุรี" />
            <option value="แม่ฮ่องสอน" />
            <option value="สุพรรณบุรี" />
          </datalist>

          <button onClick={() => addNewCar()}>เพิ่ม</button>
        </div>
      </div>

      {/* output data */}
      {carRawData.map((data) => {
        return (
          <div className="data-list-container" key={data.id}>
            <span className="data-Input">
              <div className="data-Text">
              <label>{data.Car_registration}</label><br />
              <label>{data.car_address}&nbsp;&nbsp;</label>
              </div>
              
            </span>
            

            <span className="data-Button">
            <button
                className="bi bi-pencil-square"
                style={{ }}
                onClick={() => {
                  handleShow();
                  keepdata(data.id);
                }}
              />
              <button
                className="bi bi-trash"
                style={{ marginRight: "1rem", fontSize: "1.5rem" , marginLeft:"0.5rem" }}
                onClick={() => deleteCar(data.id)}
              />
              {/* switch button */}
              <label className="switch">
                <input type="checkbox"  onChange={handleCheckboxChange} /> 
              
                <span className="slider">
                  <svg
                    className="slider-icon"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="m4 16.5 8 8 16-16" />
                  </svg>
                </span>
              </label>
            </span>
          </div>
        );
      })}      
      </div>
      <div className="menubar">
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
            to="/qrscan"
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
            to="/appointmentForm"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div>
              <span className="bi bi-calendar4"></span>
              <br />
              <span className="Text-bar">Appointment</span>
            </div>
          </NavLink>
        </div>
        <div className="container-icon">
          <NavLink
            to="/notifications"
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

export default Addcar;
