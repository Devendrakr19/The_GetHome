import React from "react";
import "./Scss/Footerimg.scss";

export default function Footerimg() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fefeff"
          fillOpacity="1"
          d="M0,32L120,48C240,64,480,96,720,96C960,96,1200,64,1320,48L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div className="footer_area">
        <div className="home3d_div">
          <div className="img3d_div">
            <img
              src="https://myfirstbucketrohitannie.s3.ap-south-1.amazonaws.com/mobilemap2.jpg"
              alt=""
              id="img3d"
            />
          </div>
          <div className="Ftext_div">
            <div className="text">
              <img
                src="https://myfirstbucketrohitannie.s3.ap-south-1.amazonaws.com/homelogo3.png"
                alt=""
                id="footertextimg"
              />
              <img
                src="https://myfirstbucketrohitannie.s3.ap-south-1.amazonaws.com/google-play+(1).jpg"
                alt=""
                id="footertextimg2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
