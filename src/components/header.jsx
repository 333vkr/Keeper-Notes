import React from "react";
import "../css/styles.css";
import Weather from "./Weather";

const Header = () => {
  return (
    <div className="header">
      <h1>Keeper</h1>
      <Weather />
    </div>
  );
};

export default Header;
