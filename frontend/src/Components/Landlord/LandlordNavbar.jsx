import React from "react";
import { Link } from "react-router-dom";
import "../Landlord/LandlordNavbar.scss";

function LandlordNavbar() {
  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-items">
          <img
            src="https://myfirstbucketrohitannie.s3.ap-south-1.amazonaws.com/homelogo3.png"
            alt=""
          />
        </div>
        <div className="nav-text">
          <Link to="/LandlordHome" className="home_login">
            Home
          </Link>
          <Link to="/" className="home_login">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandlordNavbar;
