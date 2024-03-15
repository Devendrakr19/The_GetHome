import React from "react";
import "./Scss/Pg.scss";

export default function Pg() {
  return (
    <>
      <div className="pg_div">
        <div className="pgimg_div">
          <div className="pg_text_div">
            <div className="pg_text">
              <h2 className="pg_h2">Book your desirable PG!</h2><br />
              <p className="pg_p ">
                GetHome serves happy customers in 5,000+ locations.
              </p>
              <button type="submit" id="pg_btn">
                Book PG!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
