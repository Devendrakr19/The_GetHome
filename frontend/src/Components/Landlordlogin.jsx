import { useState } from "react";
import "./Scss/Renterlogin.scss";
import { Link } from "react-router-dom";

export default function Landlordlogin() {
  const [emailormobile, setemailOrmobile] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="login_container">
        <form action="" onSubmit={submitHandle}>
          <div className="col1">
            <img src="/home.png" alt="" />
          </div>
          <div className="col2">
            <div className="content">
              <h1>Landlord Login</h1>
              <div className="email_div">
                <label htmlFor="email_mobile">Email or Mobile no.</label>
                <input
                  type="text"
                  placeholder="Email or Mobile no"
                  value={emailormobile}
                  onChange={(e) => setemailOrmobile(e.target.value)}
                  required
                />
              </div>
              <div className="password_div">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  required
                />
              </div>
              <div className="forgot_div">
                <div className="remember_me">
                  <input type="checkbox" />
                  <label htmlFor="password">Remember me</label>
                </div>
                <p>
                  <Link to="/" id="forgot_p">
                    Forgot password?
                  </Link>
                </p>
              </div>
              <button id="login_div">
                <Link to="/" id="login_btn">
                  Login
                </Link>
              </button>
              <p>
                <Link to="/signup" id="signup_btn">
                  Signup
                </Link>
              </p>
              <div className="fb_google">
                <button id="fb">Login with facebook</button>
                <button id="google">Login with Google</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
