import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Tracker</p>
        <hr className="line" />
      </div>
      <div className="footer-content">
        <div className="menu-items">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="copy-section">
          <div className="copy-text">
            &copy; 2023 Tracker. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
