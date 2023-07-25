import React, { useState } from "react";
import {AiOutlineLogin} from 'react-icons/ai'
import "./Navbar.css";
import {BsPersonFillAdd,BsCartFill} from 'react-icons/bs'
import {GrMenu} from 'react-icons/gr'
function Navbar() {
  const [State, setState] = useState(false)
  return (
    <div>
      <div className={State===false?'header':'header1'}>

        <div className="brand">
          <h1>BuyZen</h1>
        </div>
        <div className={State===false?"links":'links1'}>
          <ul className={State===false?"ul":'ul1'}>
            <li className={State===false?"link":'link1'}>home</li>
            <li className={State===false?"link":'link1'}>about</li>
            <li className={State===false?"link":'link1'}>service</li>
            <li className={State===false?"link":'link1'}>contact</li>
          </ul>
        </div>
        <span className="menu-btn" onClick={()=>setState(!State)}><GrMenu/></span>
        <div className={State===false?"buttons":'buttons1'}>
          <button className={State===false?'login-btn':'login-btn1'}><AiOutlineLogin/>  Login</button>
          <button className={State===false?"reg-btn":'reg-btn1'}><BsPersonFillAdd/>  Register</button>
          <button className={State===false?"cart-btn":'cart-btn1'}><BsCartFill/>  Cart</button>
         
        </div>
       
       
      
       
      </div>
      <hr />
    </div>
  );
  }

export default Navbar;
