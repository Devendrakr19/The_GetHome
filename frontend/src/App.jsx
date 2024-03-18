import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Searchroom from "./Components/Searchroom";
import Loginpage from "./Components/Login_signup/Loginpage";
import Renterlogin from "./Components/Login_signup/Renterlogin";
import Landlordlogin from "./Components/Login_signup/Landlordlogin";
import Rentersignup from "./Components/Login_signup/Rentersignup";
import Landlordsignup from "./Components/Login_signup/Landlordsignup";
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
import SignupPage from "./Components/Login_signup/SignupPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/fileupload" element={<Fileupload />} />

        {/* //login and signup page routng................. */}
        <Route path="/signuppage/" element={<SignupPage />}>
          <Route path="rentersignup" element={<Rentersignup />} />
          <Route path="landlordsignup" element={<Landlordsignup />} />
        </Route>
        <Route path="/" exact="true" element={<Loginpage />}>
          <Route path="" element={<Renterlogin />} />
          <Route path="landlordlogin" element={<Landlordlogin />} />
        </Route>
        {/* //login and signup page End  ......... */}


        {/* ...........Renter Home page routing ......................*/}
        <Route path="/Home/" element={<Home />}>
          <Route path="" element={<RenterHome />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Help" element={<Help />} />
        </Route>
        <Route path="/Searchroom" element={<Searchroom />} />
        <Route path="/Moreinfo" element={<Moreinfo />} />

        {/* ..........Landlord page routing........................... */}
        <Route path="/LandlordHome" element={<LandlordHome />} />
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
