import React from "react";
import "./Scss/Flat.scss";
import { Link } from "react-router-dom";

export default function Flat() {
  return (
    <>
      <div className="flat_div">
        <div className="image_flat">
          <div className="text_flat_div">
            <div className="flat_text">
              <h2 className="flatdiv_h2">Book your desirable Flat!</h2>
              <br />
              <p className="flatdiv_p ">
                GetHome serves happy customers in 5,000+ locations.
              </p>
              <button type="submit" id="flat_btn">
                <Link to="/searchroom" id="link">Book Flat!</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
