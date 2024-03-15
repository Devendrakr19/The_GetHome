import "../Scss/LandlordFlatDetails.scss";
import LandlordNavbar from "./LandlordNavbar";
import Homeroute from "./Homeroute";

function LandlordFlatDetails() {
  return (
    <>
      <div>
        <LandlordNavbar />
      </div>
      <div className="wrapper">
        <Homeroute />
      </div>
    </>
  );
}

export default LandlordFlatDetails;
