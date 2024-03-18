import React from "react";
import "./Scss/Trustfair.scss";

export default function Trustfair() {
  return (
    <>
      <div className="content w-100">
        <div className="info text-light">
          <div className="info_first_child">
            <h2 id="info_h2">Fast</h2>
            <p id="info1text">
              We provide online advance booking within a minute! As you can get
              Home
            </p>
          </div>
        </div>

        <div className="info text-light" id="info_second">
          <div className="info_second_child">
            <h2 id="info_h2">Fair</h2>
            <p id="info1text">Easy to return payment if transaction failed!</p>
          </div>
        </div>
        
        <div className="info text-light" id="info_third">
          <div className="info_third_child">
            <h2 id="info_h2">Trusted</h2>
            <p id="info1text"> 5 million+ Indians have downloaded GetHome</p>
          </div>
        </div>
      </div>
    </>
  );
}
