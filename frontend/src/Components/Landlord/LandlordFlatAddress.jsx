import "../Scss/LandlordFlatAddress.scss";

function LandlordFlatAddress() {
  return (
    <>
      <div className="address-wrapper">
        <div className="address-details">
          <h2 className="Address-title">Address</h2>
          <button className="Add-btn">Add+ Address</button>
        </div>
        <div className="add-details">
          <div className="input-wrapper">
            <label htmlFor="pincode">Pincode:</label>
            <input
              type="tel"
              className="add-input"
              placeholder="Pincode(Required)"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="State">State:</label>
            <input
              type="text"
              className="add-input"
              placeholder="State(Required)"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="City">City:</label>
            <input
              type="text"
              className="add-input"
              placeholder="City(Required)"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="House No">House No:</label>
            <input
              type="text"
              className="add-input"
              placeholder="House No, Building Name(Required)"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="Area">Area:</label>
            <input
              type="text"
              className="add-input"
              placeholder="Road name, Area, Coloni(Required)"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="Landmark">Landmark:</label>
            <input
              type="text"
              className="add-input"
              placeholder="Famous Shop/Mall/Landmark(Required)"
            />
          </div>
        </div>
        <div className="edit-btn">
          <button>Edit</button>
          <button>Save</button>
        </div>
      </div>
    </>
  );
}

export default LandlordFlatAddress;
