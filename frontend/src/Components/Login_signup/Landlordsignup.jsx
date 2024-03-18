import { useState } from "react";
import "../Login_signup/Landlordsignup.scss";
import { Link } from "react-router-dom";

export default function Landlordsignup() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [name, setName] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form action="" onSubmit={submitHandle} id="Landlord_form">
        <div className="Landlord_col1">
          <img
            src="https://myfirstbucketrohitannie.s3.ap-south-1.amazonaws.com/home.png"
            alt=""
          />
        </div>
        <div className="Landlord_col2">
          <div className="Landlord_content">
            <h1>Landlord Signup</h1>
            <div className="Landlord_username_div">
              <label htmlFor="username">Fullname:</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="Landlord_email_div">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="Enter email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="Landlord_mobile_div">
              <label htmlFor="mobile">Mobile no:</label>
              <input
                type="tel"
                placeholder="Enter your mobile no."
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            <div className="Landlord_password_div">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                required
              />
            </div>
            <div className="Landlord_password_div">
              <label htmlFor="confirm_password">Confirm Password:</label>
              <input
                type="password"
                placeholder="********"
                value={cpassword}
                onChange={(e) => setCpassword(e.currentTarget.value)}
                required
              />
            </div>
            <button className="Landlord_div" type="submit">
              <Link to="/landlordlogin" id="Landlord_link">
                Submit
              </Link>
            </button>
            <p>
              Already have an account?{" "}
              <Link to="/landlordlogin" id="Landlord_login_link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
