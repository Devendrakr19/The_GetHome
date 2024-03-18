import React, { useState, useEffect } from "react";
import "../Login_signup/SignupPage.scss";
import { Link, Outlet } from "react-router-dom";

export default function SignupPage() {
  const [activeButton, setActiveButton] = useState();

  useEffect(() => {
    // Retrieve the activeButton value from localStorage on component mount
    const storedActiveButton = localStorage.getItem("activeButton");
    if (storedActiveButton) {
      setActiveButton(storedActiveButton);
    }
  }, []);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    // Store the activeButton value in localStorage
    localStorage.setItem("activeButton", buttonId);
  };

  return (
    <>
      <div className="SignupPage_conatiner ">
        <div className="SignupPage_wrapper">
          <div className="SignupPage_link_div">
            <button
              style={{
                background:
                  activeButton === "renterlogin" ? "rgb(4, 150, 200)" : "black",
              }}
            >
              <Link
                to="/signuppage/rentersignup"
                id="SignupPage_renterlink"
                onClick={() => handleButtonClick("renterlogin")}
              >
                Renter
              </Link>
            </button>
            <button
              style={{
                background:
                  activeButton === "landlordlogin"
                    ? "rgb(4, 150, 200)"
                    : "black",
              }}
            >
              <Link
                to="/signuppage/landlordsignup"
                id="SignupPage_landlirdlink"
                onClick={() => handleButtonClick("landlordlogin")}
              >
                Landlord
              </Link>
            </button>
          </div>
          <div className="SignupPage_outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
