import "../Landlord/LandlordFlatDetails.scss";
import { Link, Outlet } from "react-router-dom";

function Homeroute() {
  return (
    <>
      <div className="select-area">
        <div className="select">
          <Link to="" id="flatlink">
            Flat
          </Link>
        </div>
        <div className="select">
          <Link to="LandlordPg" id="flatlink">
            PG
          </Link>
        </div>
        <div className="select">
          <Link to="Landlordhostel" id="flatlink">
            Hostel
          </Link>
        </div>
        <div className="select">
          <Link to="Landlordlodge" id="flatlink">
            Lodge
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Homeroute;
