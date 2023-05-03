import React, { useState } from "react";
import "./OtpGenerator.css"

function OTPGenerator() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const generateOTP = () => {
    const isValidMobile = /^[6-9]\d{9}$/.test(mobile);
    if (isValidMobile) {
      fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile: mobile }),
      })
        .then((response) => {
          if (response.ok) {
            setError("");
            setMobile("");
            throw Error("OTP sent successfully");
          } else {
            throw new Error("Failed to send OTP");
          }
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("Invalid mobile number");
    }
  };

  return (
    <div>
      <h1>OTP Generator</h1>
      <input
        type="number"
        placeholder="Enter mobile number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="input"
        />
      <button onClick={generateOTP} className="button">Generate OTP</button>
      {error && <div>{error}</div>}
    </div>
  );
}

export default OTPGenerator;
