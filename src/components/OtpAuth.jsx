import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState } from "react";
function OtpAuth() {
  const [otp, setOtp] = useState([]);
  const number = useLocation();
  const mobileNumber = number.state;
  const handleOTP = (event) => {
    setOtp([...otp, event.target.value]);
  };
  return (
    <div className="otp-auth">
      <div className="container">
        <span className="header">
          <img src={Logo} className="logo" alt="logo" />
          <h1>Verify your Mobile Number</h1>
          <p>
            Please enter code sent to your mobile number ending with ******
            {mobileNumber % 10000}
          </p>
        </span>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          className="otp-form"
        >
          <input onChange={handleOTP} type="text" maxLength="1" />
          <input onChange={handleOTP} type="text" maxLength="1" />
          <input onChange={handleOTP} type="text" maxLength="1" />
          <input onChange={handleOTP} type="text" maxLength="1" />
        </form>
        <Link
          style={{ display: otp.length === 4 ? "" : "none" }}
          to="/registration-successful"
          className="btn get-otp-button"
        >
          Verify
        </Link>
        <p className="help-login">
          Didn&apos;t receive the code?{" "}
          <a href="/otp-auth" className="terms">
            Resend OTP 0:10 sec
          </a>
        </p>
      </div>
    </div>
  );
}

export default OtpAuth;
