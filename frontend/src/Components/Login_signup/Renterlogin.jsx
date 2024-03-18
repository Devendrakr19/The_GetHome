import { useState } from "react";
import "../Login_signup/Renterlogin.scss";
import { Link } from "react-router-dom";

export default function Renterlogin() {
  const [form, setform] = useState({});

  function input(e) {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const Submit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost/Home/login", {
      method: "POST",
      body: JSON.stringify(form),

      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (json.emailpassword) {
      Navigate("/Home");
    }

    if (!json.emailpassword) {
      alert("please login with valied credientials");
    }
  };

  // Landlord Login..

  const [form2, setform2] = useState({});
  function input2(e) {
    setform2({
      ...form2,
      [e.target.name]: e.target.value,
    });
  }

  const submitHandle = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost/Home/loginlandlord", {
      method: "POST",
      body: JSON.stringify(form2),

      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (json.emailpassword) {
      Navigate("/LandlordHome");
    }
    console.log(json.emailpassword);
    if (!json.emailpassword) {
      alert("please login with valied credientials");
    }
  };
  return (
    <>
      <div className="login_container">
        <form action="" onSubmit={submitHandle}>
          <div className="col1">
            <img
              src="https://myfirstbucketrohitannie.s3.ap-south-1.amazonaws.com/home.png"
              alt=""
            />
          </div>
          <div className="col2">
            <div className="content">
              <h1>Rentor Login</h1>
              <div className="email_div">
                <label htmlFor="email_mobile">Email or Mobile no.</label>
                <input
                  type="text"
                  placeholder="Email or Mobile no"
                  // value={emailormobile}
                  onChange={(e) => setemailOrmobile(e.target.value)}
                  required
                />
              </div>
              <div className="password_div">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="********"
                  // value={password}
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
                <Link to="/Home" id="login_btn">
                  Submit
                </Link>
              </button>
              <p>
                <Link to="/signuppage/rentersignup" id="signup_btn">
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
