import React from "react";
import "./Scss/Lodge.scss";

export default function Lodge() {
  return (
    <>
      <div className="lodge_img_area">
        <div className="lodgeimg_div">
          <div className="lodge_text_area">
            <div className="lodge_text">
              <h2 className="lodge_h2">Book your desirable Lodge!</h2><br />
              <p className="lodge_p ">
                GetHome serves happy customers in 5,000+ locations.
              </p>
              <button type="submit" id="lodge_btn">
                Book Lodge!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
