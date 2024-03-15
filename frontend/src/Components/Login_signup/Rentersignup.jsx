import { useState } from "react";

// import "./Scss/Rentersignup.scss";

import { Link, useNavigate } from "react-router-dom";

function Rentersignup() {
  const Navigate = useNavigate();

  const [form, setform] = useState({});

  function input(e) {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const Submit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost/Home/Signup", {
      method: "POST",
      body: JSON.stringify(form),

      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json.emailpassword);
    if (json.emailpassword) {
      console.log("see");
      localStorage.setItem("userEmail", json.userEmail);
      Navigate("/");
    }

    if (json.passwordfalls) {
      alert("password does not match with conform password");
    }
    if (json.emailexist) {
      alert("this is email is alreay exist");
    }
  };
  return (
    <>
      <div className="signup_container">
        <form className="form" onSubmit={Submit}>
          <div className="register">
            <div className="signup_info">
              <h1 id="Info">Signup</h1>
            </div>
            <div className="signup_name">
              <label htmlFor="Name" className="fullname">
                Full Name:
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                className="renter_signup_input"
                onChange={input}
                name="fullName"
              />
              <br />
              <span></span>
            </div>
            <div className="signup_email">
              <label htmlFor="email" className="email">
                Email id:
              </label>
              <br />
              <input
                type="email"
                placeholder="Enter your email id"
                className="renter_signup_input"
                onChange={input}
                name="email"
              />
              <br />
              <span></span>
            </div>
            <div className="signup_phone">
              <label htmlFor="phone" className="phone">
                Phone no.:
              </label>
              <br />
              <input
                type="tel"
                placeholder="+91"
                className="renter_signup_input"
                onChange={input}
                name="phone"
              />
              <br />
              <span></span>
            </div>
            <div className="signup_gender">
              <label htmlFor="gender" className="gender">
                Gender:
              </label>
              <div className="male_div">
                <label htmlFor="male" className="male">
                  Male
                </label>
                <input
                  type="radio"
                  className="radio_input"
                  onChange={input}
                  // name="gender"
                />
              </div>
              <div className="female_div">
                <label htmlFor="female" className="female">
                  Female
                </label>
                <input
                  type="radio"
                  className="radio_input"
                  onChange={input}
                  // name="gender"
                />
              </div>
              <div className="other_div">
                <label htmlFor="other" className="other">
                  Other
                </label>
                <input
                  type="radio"
                  className="radio_input"
                  onChange={input}
                  // name="gender"
                />
              </div>
            </div>
            <div className="signup_setpswd">
              <label htmlFor="setpassword" className="setpassword">
                Set password:
              </label>
              <br />
              <input
                type="password"
                placeholder="********"
                className="renter_signup_input"
                onChange={input}
                name="password"
              />
              <br />
              <span></span>
            </div>
            <div className="signup_cnfrmpswd">
              <label htmlFor="cnfrmpassword" className="cnfrmpassword">
                Confirm password:
              </label>
              <br />
              <input
                type="password"
                placeholder="********"
                className="renter_signup_input"
                onChange={input}
                name="confirmPassword"
              />
              <br />
              <span></span>
            </div>
            <div className="signup_btn_div">
              <button type="submit" id="signup_btn">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Rentersignup;
