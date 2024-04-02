import { useParams } from "react-router-dom";
import "../Components/Scss/Moreinfo.scss";
import showrooms from "./RoomsApi";

function Moreinfo() {
  const { id } = useParams();

  // Find the showroom with the matching id
  const roomdata = showrooms.find((room) => room.id === parseInt(id));

  if (!roomdata) {
    // Handle case when showroom with the given id is not found
    return <div>room not found!</div>;
  }
  const { url, address, price, security, advancepay } = roomdata;
  return (
    <>
      <div className="M_container">
        <div className="view_container">
          <div className="img_and_features1">
            <div className="img_area">
              <img src={url} alt="" className="imgss" />
            </div>
            <div className="toggle">
              <button className="toggles_btn">
                <i className="uil uil-arrow-circle-left"></i>
              </button>
              <button className="toggles_btn">
                <i className="uil uil-arrow-circle-right"></i>
              </button>
            </div>

            <div className="book_btndiv">
              <button className="book_now">See Location</button>
              <button className="book_now">Call to Renter</button>
            </div>
          </div>
          <div className="img_and_features2">
            <div className="address_info">
              <h3>
                Location: {""}{" "}
                <span>
                  {address.area}, {address.landmarks}, {address.house_no},{" "}
                  {address.pincode}, {address.city}, {address.state},
                </span>
              </h3>
            </div>
            <div className="price_infodiv">
              <div className="price_info">
                <label htmlFor="price">Price:{""} </label>
                <span>Rs {price}/month</span>
              </div>
              <div className="price_info">
                <label htmlFor="security">Security charge:{""} </label>
                <span>Rs {security}</span>
              </div>
            </div>
            <div className="price_infodiv">
              <div className="price_info">
                <label htmlFor="advancedpay">Advanced payment:{""} </label>
                <span>{advancepay}</span>
              </div>
              <div className="price_info">
                <label htmlFor="electric">Electricity bill:{""} </label>
                <span>Yes</span>
              </div>
            </div>
            <div className="price_infodiv">
              <div className="price_info">
                <label htmlFor="cooler">Cooler:{""} </label>
                <span>Yes</span>
              </div>
              <div className="price_info">
                <label htmlFor="smoking">Smoking:{""} </label>
                <span>No</span>
              </div>
            </div>
            <div className="price_infodiv">
              <div className="price_info">
                <label htmlFor="ac">AC:{""} </label>
                <span>No</span>
              </div>
              <div className="price_info">
                <label htmlFor="fridge">Refrigerator:{""} </label>
                <span>Yes</span>
              </div>
            </div>
            <div className="price_infodiv">
              <div className="price_info">
                <label htmlFor="geyser">Geyser:{""} </label>
                <span>Yes</span>
              </div>
              <div className="price_info">
                <label htmlFor="wifi">Wifi:{""} </label>
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moreinfo;
