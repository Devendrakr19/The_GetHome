import React from "react";
import "./Scss/Showroom.scss";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import showrooms from "./RoomsApi";

export default function Showroom({ showrooms }) {
  const printStar = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} />);
    }
    return stars;
  };

  return (
    <>
      <div className="showroom_container">
        {showrooms.map((roomsdata) => {
          const {
            id,
            url,
            address,
            roomtype,
            price,
            security,
            advancepay,
            rating,
            review,
          } = roomsdata;

          return (
            <div className="room_div" key={roomsdata.id}>
              <div className="room_img">
                <img src={url} alt="" />
              </div>
              <div className="room_details">
                <div className="address">
                  <div className="address_content">
                    <h2>
                      Location:-{" "}
                      <span>
                        {address.area}
                        {", "}
                        {address.landmarks}
                        {", "}
                        {address.house_no}
                        {", "}
                        {address.pincode}
                        {", "}
                        {address.city}
                        {", "}
                        {address.state}
                      </span>
                    </h2>
                  </div>
                </div>

                <div className="price_div">
                  <div className="price">
                    <h2>
                      Room-type:- <span>{roomtype}</span>
                    </h2>
                    <h2>
                      Price:- <span>Rs {price}/month</span>
                    </h2>
                    <h2>
                      Security charge:- <span>Rs {security}</span>
                    </h2>
                    <h2>
                      Advanced Pay:- <span>{advancepay}</span>
                    </h2>
                  </div>
                  <div className="more_info">
                    <Link to={`/Moreinfo/${id}`} className="moreinfo_link">
                      Moreinfo+
                    </Link>
                  </div>
                </div>
                <div className="rating_div">
                  <div className="star_div">
                    <p>
                      {rating} <span>({review} reviews)</span>
                    </p>
                    <p>{printStar(rating)}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
