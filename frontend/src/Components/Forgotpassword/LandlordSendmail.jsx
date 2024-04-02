import "../Forgotpassword/RenterSendmail.scss";
import { NavLink } from "react-router-dom";
export default function LandlordSendmail() {
  return (
    <>
      <div className="sendmail_container">
        <div className="mail_div_wrapper">
          <div className="mail_content">
            <h2>Forgot Password</h2>
            <p>
              Enter your account's email address or mobile number below and we
              will email you a link to reset your password with.
            </p>
            <div className="sendmail_div">
              <label htmlFor="emiai">Email or Mobile no :</label>
              <div className="sendmial_input_btn">
                <input type="text" id="sendmail_input" />
                <button id="sendmail_btn">Submit</button>
              </div>
            </div>

            <div className="Otp_div">
              <p>Enter OTP:</p>
              <div className="input_wrapper">
                <input type="text" className="Otp_input" />
                <input type="text" className="Otp_input" />
                <input type="text" className="Otp_input" />
                <input type="text" className="Otp_input" />
              </div>
              <button id="reset_pswd_btn">
                <NavLink to="/landlordresetpassword" id="reset_link">
                  Reset password
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
