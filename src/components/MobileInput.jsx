import Logo from "../assets/logo.png";
import CountryFlag from "../assets/india-flag.png";
import { useState } from "react";
import { Link } from "react-router-dom";
function MobileInput() {
  const [flag, setFlag] = useState(false);
  const [mobileNumber, setMobileNumber] = useState(0);
  return (
    <div className="MobileInput">
      <div className="container">
        <span className="header">
          <img className="logo" src={Logo} alt="logo" />
          <h1>Mobile Number</h1>
          <p>We&apos;l send you a one-time verification code.</p>
        </span>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setFlag(!flag);
          }}
          className="mobile-no-input"
        >
          <span className="countries">
            <img src={CountryFlag} alt="country" />
            <span className="country-code">+91</span>
          </span>
          <input
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Enter a mobile number"
            onChange={(event) => {
              setMobileNumber(event.target.value);
            }}
            required
          />
        </form>
        <p className="policy-agreements">
          By Continuing, I agree to the
          <a href="/" className="terms">
            {" "}
            Terms of Use & Privacy Policy
          </a>
        </p>
        <Link
          style={{ textDecoration: "none" }}
          to="/otp-authorization"
          state={mobileNumber}
          className="btn get-otp-button"
        >
          Get OTP
        </Link>
        <p className="help-login">
          Having Trouble Logging in?{" "}
          <a className="terms" href="/">
            Get help.
          </a>
        </p>
      </div>
    </div>
  );
}

export default MobileInput;
