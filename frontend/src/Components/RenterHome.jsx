import Textonvideo from "./Textonvideo";
import Trustfair from "./Trustfair";
import Map from "./Map";
import Flat from "./Flat";
import Pg from "./Pg";
import Hostel from "./Hostel";
import Lodge from "./Lodge";
import Lastimgsec from "./Lastimgsec";
import Footerimg from "./Footerimg";
import Footerend from "./Footerend";
import "../Components/Scss/Textonvideo.scss";

function RenterHome() {
  return (
    <>
      <div className="renter_container">
        <Textonvideo />
        {/* <video src="homevideo3.mp4" autoPlay loop muted></video> */}
        <Trustfair />
        <Map />
        <Flat />
        <Pg />
        <Hostel />
        <Lodge />
        <Lastimgsec />
        <Footerimg />
        <Footerend />
      </div>
    </>
  );
}

export default RenterHome;
