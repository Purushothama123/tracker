import React, { useState } from "react";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password123") {
      setErrorMessage("");
      alert("Logged in successfully!");
    } else {
      setErrorMessage("Invalid credentials");
    }
  };
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-form">
          <div className="form-group">
            <p className="login">Log In</p>
            <input type="text" id="username" placeholder="Your email" />
          </div>
          <div className="form-group">
            <input type="password" id="password" placeholder="Your password" />
          </div>
          <button type="submit" className="login-button" onClick={handleLogin}>
            Log In
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
