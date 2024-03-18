import React, { useEffect, useState } from "react";
import "./Scss/Textonvideo.scss";
import { Link } from "react-router-dom";

export default function Textonvideo() {
  const images = [
    "https://myfirstbucketrohitannie.s3.ap-south-1.amazonaws.com/s2.jpg",
    "https://myfirstbucketrohitannie.s3.ap-south-1.amazonaws.com/s2.jpg",
    "https://myfirstbucketrohitannie.s3.ap-south-1.amazonaws.com/s3.jpg",
    "https://myfirstbucketrohitannie.s3.ap-south-1.amazonaws.com/s4.jpg",
  ];

  const [currentindex, setCurrentindex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentindex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentindex, images.length]);

  return (
    <>
      <div className="img_div">
        <div className="img_slider">
          <img src={images[currentindex]} alt={`Slide ${currentindex + 1}`} />
        </div>
        <div className="text_div">
          <h1 id="no_tension">No Tension</h1>
          <p id="advtise_text">
            Get flat and PG to your desire places!
            <span>
              <i className="uil uil-smile" id="emoji"></i>
            </span>{" "}
          </p>
          <button id="signUp_btn">
            <Link to="/signuppage/rentersignup" id="link">
              Sign up
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
