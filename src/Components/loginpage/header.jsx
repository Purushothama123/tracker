import React from "react";
import logo from "../../images/logo.png";

const MenuBar = () => {
  return (
    <header className="menu-bar">
      <div className="logo">
        <img className="logo" src={logo} alt="Logo" />
      </div>
    </header>
  );
};

export default MenuBar;
