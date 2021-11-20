import React from "react";
import year from "../script/footerScript.js";
import "../css/styles.css";

const Footer = () => {
  return (
    <footer>
      copyright &copy; <span>{year()}</span>
    </footer>
  );
};

export default Footer;
