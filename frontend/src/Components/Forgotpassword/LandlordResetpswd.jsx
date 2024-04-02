import "../Forgotpassword/RenterResetpswd.scss";
import { NavLink } from "react-router-dom";

export default function LandlordResetpswd() {
  return (
    <>
      <div className="resetpassword_container">
        <div className="resetpassword_wrapper">
          <div className="resetpassword_content">
            <h1>Reset account password</h1>
            <div className="reset_pswd1">
              <label htmlFor="newpassword">New password:</label>
              <input type="password" placeholder="******" />
            </div>
            <div className="reset_pswd2">
              <label htmlFor="confpassword">Confirm password:</label>
              <input type="password" placeholder="******" />
            </div>
            <button className="reset_btn">
              <NavLink to="/landlordlogin" id="reset_link">
                Submit
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
