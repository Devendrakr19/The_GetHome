import { useState } from "react";
import "../Login_signup/Rentersignup.scss";
import { Link } from "react-router-dom";

export default function Rentersignup() {
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
      <form action="" onSubmit={submitHandle} id="Rentersignup_form">
        <div className="Rentersignup_col1">
          <img
            src="https://myfirstbucketrohitannie.s3.ap-south-1.amazonaws.com/home.png"
            alt=""
          />
        </div>
        <div className="Rentersignup_col2">
          <div className="Rentersignup_content">
            <h1>Renter Signup</h1>
            <div className="Rentersignup_username_div">
              <label htmlFor="username">Fullname</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="Rentersignup_email_div">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="Rentersignup_mobile_div">
              <label htmlFor="mobile">Mobile no.</label>
              <input
                type="tel"
                placeholder="Enter your mobile no."
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            <div className="Rentersignup_password_div">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                required
              />
            </div>
            <div className="Rentersignup_password_div">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                placeholder="********"
                value={cpassword}
                onChange={(e) => setCpassword(e.currentTarget.value)}
                required
              />
            </div>
            <button className="Rentersignup_div" type="submit">
              <Link to="/ " id="Rentersignup_link">
                Submit
              </Link>
            </button>
            <p>
              Already have an account?{" "}
              <Link to="/ " id="Rentersignup_login_link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
