import React from "react";
import "./Scss/Hostel.scss";

export default function Hostel() {
  return (
    <>
      <div className="Hostel_div">
        <div className="hostelimage_div">
          <div className="hostel_text_area">
            <div className="hostel_text">
              <h2 className="hostel_h2">Book your desirable Hostel!</h2><br />
              <p className="hostel_p ">
                GetHome serves happy customers in 5,000+ locations.
              </p>
              <button type="submit" id="hostel_btn">
                Book Hostel!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
