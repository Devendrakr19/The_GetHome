import { Link } from "react-router-dom";
import React from "react";
import "../Scss/LandlordScreenarea.scss";

function LandlordScreenarea() {
  return (
    <>
      <div className="container">
        <div className="Home-screen">
          <div className="home-wrapper">
            <div className="flat">
              <div className="text-wrapper">
                <h1>
                  <Link to="/LandlordFlatDetails" id="link">
                    Flat
                  </Link>
                </h1>
                <p>Click on Flat to add your location and price.</p>
              </div>
            </div>
            <div className="Pg">
              <div className="text-wrapper">
                <h1>
                  <Link to="/LandlordFlatDetails" id="link">
                    PG
                  </Link>
                </h1>
                <p>Click on PG to add your location and price.</p>
              </div>
            </div>
            <div className="hostel">
              <div className="text-wrapper">
                <h1>
                  <Link to="/LandlordFlatDetails" id="link">
                    Hostel
                  </Link>
                </h1>
                <p>Click on Hostel to add your location and price.</p>
              </div>
            </div>
            <div className="lodge">
              <div className="text-wrapper">
                <h1>
                  <Link to="/LandlordFlatDetails" id="link">
                    Lodge
                  </Link>
                </h1>
                <p>Click on Lodge to add your location and price.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandlordScreenarea;
