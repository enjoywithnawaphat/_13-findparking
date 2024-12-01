import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


function LoginScreen({userdata , setRolltoken ,setName , setLastname , setPhone , setPass}) {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  useEffect(() => {

    console.log('data_in_login',userdata);
  }, );

  const handleLine = () => {
    navigate('/line');
  }

  const handleSignup = () => {
    navigate('/signup');
  }
  const handleLogin = () => {
    if (userdata.current && Array.isArray(userdata.current)) {
      const validUser = userdata.current.find(
        (user) => user.phone === phoneNumber && user.password === password
      );
  
      if (validUser) {
        console.log("Valid user found:", validUser);
        setRolltoken(validUser.role); // อัปเดต rolltoken
        setName(validUser.firstname);
        setLastname(validUser.lastname);
        setPhone(validUser.phone);
        setPass(validUser.password)

      } else {
        setError('หมายเลขโทรศัพท์หรือรหัสผ่านไม่ถูกต้อง');
      }
    } else {
      setError('เกิดข้อผิดพลาดในระบบ');
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src="./metthier.png" alt="metthier logo" className="logo-image" />
      </div>

      <div className=" ">
        <input
          type="text"
          placeholder="Phone number"
          className="username-input"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p className="login-error">{error}</p>}

      <div>
        <p className="login-forgot">Forgot password?</p>
      </div>

      <button className="login-button" onClick={handleLogin}>Login</button>
      <button className="line-button"  onClick={handleLine}>
        <img src="./line.png" alt="" className="line-icon"/>
        <p className="line-text">Sign in with Line</p>
      </button>


      <div className='sen'></div>


      <button className="signup-button" onClick={handleSignup}>Sign up</button>
    </div>
  );
}

export default LoginScreen;
