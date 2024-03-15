import LandlordFlatAddress from "./LandlordFlatAddress";
import "../Scss/LandlordFlatDetails.scss";

function Landlordhostel() {
  return (
    <>
      <div className="flat_wrapper">
        <div className="Home-details-area">
          <div className="payment-home-details">
            <h1 className="details-heading">Flat type</h1>
            <h1 className="details-heading">Total</h1>
            <h1 className="details-heading">Booked</h1>
            <h1 className="details-heading">Available</h1>
            <h1 className="details-heading">Price</h1>
            <h1 className="details-heading">Security Charge</h1>
            <h1 className="details-heading">Advanced Pay</h1>
          </div>
          <div className="payment-details">
            <h1 className="details" id="bhk">
              1-Bed
            </h1>
            <input type="price" className="details" placeholder="Total" />
            <input type="price" className="details" placeholder="Booked" />
            <input type="price" className="details" placeholder="Available" />
            <input type="price" className="details" placeholder="Rs" />
            <input type="price" className="details" placeholder="Rs" />

            <select name="adv_pay" id="pay" className="details">
              <option value="Choose">Choose</option>
              <option value="Full">Full</option>
              <option value="Half">Half</option>
            </select>
          </div>
          <div className="payment-details">
            <h1 className="details" id="bhk">
              2-Bed
            </h1>
            <input type="price" className="details" placeholder="Total" />
            <input type="price" className="details" placeholder="Booked" />
            <input type="price" className="details" placeholder="Available" />
            <input type="price" className="details" placeholder="Rs" />
            <input type="price" className="details" placeholder="Rs" />
            <select name="adv_pay" id="pay" className="details">
              <option value="Choose">Choose</option>
              <option value="Full">Full</option>
              <option value="Half">Half</option>
            </select>
          </div>
          <div className="payment-details">
            <h1 className="details" id="bhk">
              3-Bed
            </h1>
            <input type="price" className="details" placeholder="Total" />
            <input type="price" className="details" placeholder="Booked" />
            <input type="price" className="details" placeholder="Available" />
            <input type="price" className="details" placeholder="Rs" />
            <input type="price" className="details" placeholder="Rs" />
            <select name="adv_pay" id="pay" className="details">
              <option value="Choose">Choose</option>
              <option value="Full">Full</option>
              <option value="Half">Half</option>
            </select>
          </div>
          <div className="payment-details">
            <h1 className="details" id="bhk">
              4-Bed
            </h1>
            <input type="price" className="details" placeholder="Total" />
            <input type="price" className="details" placeholder="Booked" />
            <input type="price" className="details" placeholder="Available" />
            <input type="price" className="details" placeholder="Rs" />
            <input type="price" className="details" placeholder="Rs" />
            <select name="adv_pay" id="pay" className="details">
              <option value="Choose">Choose</option>
              <option value="Full">Full</option>
              <option value="Half">Half</option>
            </select>
          </div>
        </div>
        <div className="edit-area">
          <button className="edit-save">Edit</button>
          <button className="edit-save">Save</button>
        </div>
        <LandlordFlatAddress />
      </div>
    </>
  );
}

export default Landlordhostel;
