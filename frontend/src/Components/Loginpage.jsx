import React, { useState, useEffect } from "react";
import "./Scss/Loginpage.scss";
import { Link, Outlet } from "react-router-dom";

export default function Loginpage() {
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
      <div className="login_body ">
        <div className="link_div">
          <button
            style={{
              background:
                activeButton === "renterlogin" ? "rgb(4, 150, 200)" : "black",
            }}
          >
            <Link
              to=""
              id="renterlogin"
              onClick={() => handleButtonClick("renterlogin")}
            >
              Renter
            </Link>
          </button>
          <button
            style={{
              background:
                activeButton === "landlordlogin" ? "rgb(4, 150, 200)" : "black",
            }}
          >
            <Link
              to="landlordlogin"
              id="landlordlogin"
              onClick={() => handleButtonClick("landlordlogin")}
            >
              Landlord
            </Link>
          </button>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
}
