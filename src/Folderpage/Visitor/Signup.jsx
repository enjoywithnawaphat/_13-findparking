import "./Signup.css";
import { useState,useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";

import { memberData } from "../../member";

function Signup({usersRef}) { // รับ props ที่เป็นฟังก์ชัน
  const [Checked, setChecked] = useState(true);
  const [submitChecked, setSubmitChecked] = useState(false);

  // const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();


  const [memberRawData, setmemberRawData] = useState([]);

  useEffect(() => {
    setmemberRawData(memberData());
    
  }, []);

  useEffect(() => {
    // console.log(memberRawData);
  }, );

  function handleCheck(){
    setSubmitChecked(!submitChecked)
  }

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
    confirmPassword: "",
    employeeId: "",
    role: "member",
  });

  const handleClick = () => {
    setChecked(!Checked);
    setFormData({
      firstname: "",
      lastname: "",
      phone: "",
      password: "",
      confirmPassword: "",
      employeeId: "",
    });
    setFormData((prevData) => ({
      ...prevData,
      role: !Checked ? "member" : "visitor",
    }));

    

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.firstname || !formData.lastname || !formData.phone || !formData.password || !formData.confirmPassword || !formData.employeeId) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");

      return;
  }

    if(formData.password !== formData.confirmPassword){
      alert("Password ไม่ตรงกัน")
      return;
    }
    if(!submitChecked){
      alert("กรุณายอมรับเงื่อนไขข้อกำหนดของบริษัท");
      return;
    }

  const memberExists = memberRawData.some((item) => item.memberId == formData.employeeId);
  if (!memberExists) {
    alert("รหัส member ไม่ถูกต้อง");
    return;
  }
    

  

    // if (isSubmitting) return;
    
    // setIsSubmitting(true);

    // ส่งข้อมูลไปยัง parent component ผ่าน setUsersData
    // setUsersData((prevData) => [...prevData, formData]);
    usersRef.current.push(formData);

    

    setFormData({
      firstname: "",
      lastname: "",
      phone: "",
      password: "",
      confirmPassword: "",
      employeeId: "",
      role: "member",
    });

    // setTimeout(() => setIsSubmitting(false), 1000);
    
    navigate('/otp');

  }

  function handleSubmitVisitor() {
    if(formData.password !== formData.confirmPassword){
      alert("Password ไม่ตรงกัน")
      return;
    }
    if(!submitChecked){
      alert("กรุณายอมรับเงื่อนไขข้อกำหนดของบริษัท");
      return;
    }

    if (!formData.firstname || !formData.lastname || !formData.phone || !formData.password || !formData.confirmPassword) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // if (isSubmitting) return;
    
    // setIsSubmitting(true);

    // ส่งข้อมูลไปยัง parent component ผ่าน setUsersData
    // setUsersData((prevData) => [...prevData, formData]);
    usersRef.current.push(formData);

    setFormData({
      firstname: "",
      lastname: "",
      phone: "",
      password: "",
      confirmPassword: "",
      employeeId: "",
      role: "member",
    });

    navigate('/otp');

  }



  return (
    <div className="signup-container">
      <div className="signupHeadText">
        <div className="textSignup">
        <Link to="/login" style={{color:"black"}}>
          <span
            className="bi bi-arrow-left-short"
            style={{ fontSize: "2rem" }}
          ></span>
        </Link>
          <span className="text">ลงทะเบียน</span>
          <span className=""></span>
        </div>
      </div>
      <div className="radio-input">
        <label>
          <input
            defaultValue="value-1"
            name="value-radio"
            id="btn-1"
            type="radio"
            checked={Checked}
            onChange={handleClick}
            
          />
          <span>Member</span>
        </label>
        <label>
          <input
            defaultValue="value-2"
            name="value-radio"
            id="btn-2"
            type="radio"
            checked={!Checked}
            onChange={handleClick}
          />
          <span>Visitor</span>
        </label>
        <span className="selection" />
      </div>

      {Checked ? (
        <div className="input-container">
          <input
            type="text"
            name="firstname"  
            placeholder="First Name"
            value={formData.firstname}  
            onChange={handleInputChange} 
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}  
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"  
            placeholder="Phone number"
            value={formData.phone}  
            onChange={handleInputChange} 
          />
          
          <input
            type="password"
            name="password"  
            placeholder="Password"
            value={formData.password} 
            onChange={handleInputChange}  
          />
          
          <input
            type="password"
            name="confirmPassword" 
            placeholder="Confirm Password"
            value={formData.confirmPassword} 
            onChange={handleInputChange}  
          />
          {formData.password !== formData.confirmPassword && formData.confirmPassword && (
          <span className="error-conpass" style={{ color: 'red' }}>รหัสผ่านไม่ตรงกัน</span>
          )}
          <input
            type="text"
            name="employeeId" 
            placeholder="Member ID"
            value={formData.employeeId} 
            onChange={handleInputChange}

          />
          {/* {checkID ? (<span></span>) : (<span>รหัสพนักงานไม่ถูกต้อง</span>)} */}
          {/* {formData.employeeId !== memberRawData.memberId (<span>รหัส Member ไม่ถูกต้อง</span>)} */}
          
          <p className="container-checkbox">
            <input type="checkbox" onChange={() => handleCheck()} checked={submitChecked}/>
            <label>ยอมรับเงื่อนไขข้อกำหนดของบริษัท</label>
          </p>

          <div className="container-button">
            <button onClick={handleSubmit} >ลงทะเบียน</button>
          </div>
        </div>
      ) : (
        <div className="input-container">
          <input
            type="text"
            name="firstname"  
            placeholder="First Name"
            value={formData.firstname}  
            onChange={handleInputChange}  
          />
          <input
            type="text"
            name="lastname" 
            placeholder="Last Name"
            value={formData.lastname}  
            onChange={handleInputChange}  
          />
          <input
            type="text"
            name="phone"  
            placeholder="Phone number"
            value={formData.phone} 
            onChange={handleInputChange} 
          />
          <input
            type="password"
            name="password" 
            placeholder="Password"
            value={formData.password}  
            onChange={handleInputChange} 
          />
          <input
            type="password"
            name="confirmPassword" 
            placeholder="Confirm Password"
            value={formData.confirmPassword} 
            onChange={handleInputChange}  
          />
          {formData.password !== formData.confirmPassword && formData.confirmPassword && (
          <span className="error-conpass" style={{ color: 'red' }}>รหัสผ่านไม่ตรงกัน</span>
          )}

          <p className="container-checkbox">
            <input type="checkbox" onChange={() => handleCheck()} checked={submitChecked}/>
            <label>ยอมรับเงื่อนไขข้อกำหนดของบริษัท</label>
          </p>

          <div className="container-button">
            <button onClick={handleSubmitVisitor} >ลงทะเบียน</button>
          </div>
        </div>
        
      )}

          
          

      <footer>
        <label>หากคุณมีบัญชีอยู่แล้ว</label>
        <br />
        <label><a href="/">Login to account?</a></label>
      </footer>
    </div>
  );
}



export default Signup;