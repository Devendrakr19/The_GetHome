import React from "react";
import "./Scss/Map.scss";
import { Link } from "react-router-dom";

export default function Map() {
  return (
    <>
      <div className="indianmap_parentdiv">
        <div className="leftdiv">
          <div className="text_div_area">
            <h2 className="h2_text">Get home in all over India</h2>
            <br />
            <p className="p_text ">
              GetHome serves happy customers in 5,000+ locations.
            </p>
            <button type="submit" id="map_btn">
              <Link to="/Searchroom" id="link">
                Search
              </Link>
            </button>
          </div>
        </div>
        <div className="rigthdiv_map">
          <img src="https://myfirstbucketrohitannie.s3.ap-south-1.amazonaws.com/Indiamap-min.jpg" alt="" id="map_img" />
        </div>
      </div>
    </>
  );
}
