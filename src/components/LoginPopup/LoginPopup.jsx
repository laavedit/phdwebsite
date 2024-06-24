import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login');

  return (
    <div className='LoginPopup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'> {/* Changed class to className */}
          <h2>{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.close_icon} 
            alt="Close" 
          />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div class="login-popup-condition">
            <input type="checkbox" required/>
            <p>I agree to the terms and conditions</p>
        </div>
        {currState==="Login"
        ? <p>Create a new Account <span onClick={()=>setCurrState("Sign Up")}> Click here</span></p>
        :<p>Already have an account <span onClick={()=>setCurrState("Login")}> Login here</span></p>
        }
      </form>
    </div>
  );
};

export default LoginPopup;
