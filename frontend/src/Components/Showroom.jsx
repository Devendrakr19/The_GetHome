import React from "react";
import "./Scss/Showroom.scss";
import { Link } from "react-router-dom";

export default function Showroom() {
  return (
    <>
      <div className="room_div">
        <div className="room_img"></div>
        <div className="room_details">
          <div className="address">
            <div className="address_content">
              <h2>
                Location:-{" "}
                <span>Parsauna, near shiv mandir, 841219, Bihar </span>
              </h2>
            </div>
          </div>
          <div className="price_div">
            <div className="price">
              <h2>
                Price:- <span>Rs 8,000/month</span>
              </h2><br />
              <h2>
                Security charge:- <span>Rs 3,000</span>
              </h2><br />
              <h2>
                Advanced Pay:- <span>Full</span>
              </h2>
            </div>
            <div className="more_info">
              <Link to="/Moreinfo" className="moreinfo_text">Moreinfo+</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="room_div1">
        <div className="room_img2"></div>
        <div className="room_details">
          <div className="address">
            <div className="address_content">
              <h2>
                Location:-{" "}
                <span>
                  Gharuan, near Chandigarh University, Mohali, 140413, Punjab{" "}
                </span>
              </h2>
            </div>
          </div>
          <div className="price_div">
            <div className="price">
              <h2>
                Price:- <span>Rs 10,000/month</span>
              </h2><br />
              <h2>
                Security charge:- <span>Rs 3,000</span>
              </h2><br />
              <h2>
                Advanced Pay:- <span>Full</span>
              </h2>
            </div>
            <div className="more_info">
              <h2>Moreinfo+</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="room_div1">
        <div className="room_img3"></div>
        <div className="room_details">
          <div className="address">
            <div className="address_content">
              <h2>
                Location:-{" "}
                <span>Parsauna, near shiv mandir, 841219, Bihar </span>
              </h2>
            </div>
          </div>
          <div className="price_div">
            <div className="price">
              <h2>
                Price:- <span>Rs 9,000/month</span>
              </h2><br />
              <h2>
                Security charge:- <span>Rs 3,500</span>
              </h2><br />
              <h2>
                Advanced Pay:- <span>Full</span>
              </h2>
            </div>
            <div className="more_info">
              <h2>Moreinfo+</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
