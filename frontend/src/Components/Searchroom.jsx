import React from "react";
import "./Scss/Searchroom.scss";
import Showroom from "./Showroom";
import { Link } from "react-router-dom";

export default function Searchroom() {
  return (
    <>
      <div className="search_area">
        <div className="search_navbar">
          <div className="search_location_div">
            <div className="search_field">
              <input
                type="search"
                placeholder="Search location"
                id="search_input"
              />
              <button id="srch_btn">
                <i className="uil uil-search" id="search_icon"></i>
              </button>
            </div>
            <button type="submit" id="search_btn">
              Search
            </button>
          </div>
          <div className="choose_room_item">
            <div className="Room_option">
              <button id="HomeBtn"><Link to="/Home" id="link">Home</Link></button>
            </div>
            <div className="Room_option">
              <button id="flatBtn">Flat</button>
            </div>
            <div className="Room_option">
              <button id="PgBtn">Pg</button>
            </div>
            <div className="Room_option">
              <button id="hostelBtn">Hostel</button>
            </div>
            <div className="Room_option">
              <button id="LodgeBtn">Lodge</button>
            </div>
          </div>
        </div>
        <Showroom />
      </div>
    </>
  );
}
