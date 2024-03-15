import React  from "react";
import "./Scss/Navbar.scss";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";


export default function Navbar() {
  
  return (
    <>
      <div className="navbar w-100">
        <div className="imglogo">
          <img src="https://myfirstbucketrohitannie.s3.ap-south-1.amazonaws.com/homelogo3.png" alt="" id="headlogo" />
        </div>
        <div className="navmenu">
          <ul className="navitem">
            <li className="listitem">
              <Link to="" className="itemlink">
                Home
              </Link>
            </li>
            <li className="listitem">
              <Link to="About" className="itemlink">
                About
              </Link>
            </li>
            <li className="listitem">
              <Link to="Contact" className="itemlink">
                Contact
              </Link>
            </li>
            <li className="listitem">
              <Link to="Help" className="itemlink">
                Help?
              </Link>
            </li>
            <li className="listitem">
              <Link to="/" className="itemlink">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="btnbars">
          <button className="btn">
            <i className="uil uil-bars" id="bars"></i>
            {/* <i className="uil uil-times" id="cross"></i> */}
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}
