import React, { useState } from "react";
import "./Scss/Searchroom.scss";
import Showroom from "./Showroom";
import { Link } from "react-router-dom";
import { FaSearchLocation } from "react-icons/fa";
import showrooms from "./RoomsApi";

export default function Searchroom() {
  const [selectroomtype, setSelectroomtype] = useState();
  const [enteredLocation, setEnteredLocation] = useState("");

  const handleRoomtype = (type) => {
    setSelectroomtype(type);
  };

  const handleLocationChange = (e) => {
    setEnteredLocation(e.target.value);
  };

  const filterrooms = showrooms.filter((room) => {
    const matchRoomType = !selectroomtype || room.roomtype === selectroomtype;
    const matchLocation =
      !enteredLocation ||
      Object.values(room.address)
        .join(" ")
        .toLowerCase()
        .includes(enteredLocation.toLowerCase());

    return matchRoomType && matchLocation;
  });

  return (
    <>
      <div className="searchroom_container">
        <div className="searchroom_wrapper">
          <div className="search_area">
            <div className="search_navbar">
              <div className="search_location_div">
                <div className="search_field">
                  <input
                    type="search"
                    placeholder="Filter location"
                    id="search_input"
                    value={enteredLocation}
                    onChange={handleLocationChange}
                  />
                  <button className="srch_btn">
                    <FaSearchLocation id="search_icon" />
                  </button>
                </div>
                {/* <button type="submit" id="search_btn">
                  Search
                </button> */}
              </div>
              <div className="choose_room_item">
                <div className="Room_option">
                  <button id="HomeBtn">
                    <Link to="/Home" id="link">
                      Home
                    </Link>
                  </button>
                </div>
                <div className="Room_option">
                  <button id="flatBtn" onClick={() => handleRoomtype("Flat")}>
                    Flat
                  </button>
                </div>
                <div className="Room_option">
                  <button id="PgBtn" onClick={() => handleRoomtype("Pg")}>
                    Pg
                  </button>
                </div>
                <div className="Room_option">
                  <button
                    id="hostelBtn"
                    onClick={() => handleRoomtype("Hostel")}
                  >
                    Hostel
                  </button>
                </div>
                <div className="Room_option">
                  <button id="LodgeBtn" onClick={() => handleRoomtype("Lodge")}>
                    Lodge
                  </button>
                </div>
              </div>
            </div>
            <Showroom showrooms={filterrooms} />
          </div>
        </div>
      </div>
    </>
  );
}
