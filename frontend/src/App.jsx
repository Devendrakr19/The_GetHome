import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Searchroom from "./Components/Searchroom";
import Loginpage from "./Components/Loginpage";
import Rentersignup from "./Components/Rentersignup";
import Landlordsignup from "./Components/Landlordsignup";
import LandlordHome from "./Components/Landlord/LandlordHome";
import LandlordFlatDetails from "./Components/Landlord/LandlordFlatDetails";
import LandlordPg from "./Components/Landlord/LandlordPg";
import Landlordlodge from "./Components/Landlord/Landlordlodge";
import Landlordhostel from "./Components/Landlord/Landlordhostel";
import Flatd from "./Components/Landlord/Flatd";
import Moreinfo from "./Components/Moreinfo";
import About from "./Components/About";
import RenterHome from "./Components/RenterHome";
import Contact from "./Components/Contact";
import Help from "./Components/Help";
import Fileupload from "./Components/Fileupload";
import Renterlogin from "./Components/Renterlogin";
import Landlordlogin from "./Components/Landlordlogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/fileupload" element={<Fileupload />} />
        <Route path="/Searchroom" element={<Searchroom />} />
        <Route path="/Rentersignup" element={<Rentersignup />} />
        <Route path="/Landlordsignup" element={<Landlordsignup />} />
        <Route path="/" exact="true" element={<Loginpage />}>
          <Route path="" element={<Renterlogin />} />
          <Route path="landlordlogin" element={<Landlordlogin />} />
        </Route>
        <Route path="/LandlordHome" element={<LandlordHome />} />
        <Route path="/Moreinfo" element={<Moreinfo />} />

        {/* ...........Renter Home page routing ......................*/}
        <Route path="/Home/" element={<Home />}>
          <Route path="" element={<RenterHome />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Help" element={<Help />} />
        </Route>

        {/* ..........Landlord pate routing........................... */}
        <Route path="/LandlordFlatDetails/" element={<LandlordFlatDetails />}>
          <Route path="" element={<Flatd />} />
          <Route path="LandlordPg" element={<LandlordPg />} />
          <Route path="Landlordlodge" element={<Landlordlodge />} />
          <Route path="landlordhostel" element={<Landlordhostel />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
