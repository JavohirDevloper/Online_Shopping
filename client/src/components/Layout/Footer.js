import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">Rights Reserved &copy; JavohirDev</h1>
      <p className="text-center mt-1">
        <Link to="/contact">Contact</Link>
      </p>
    </div>
  );
};

export default Footer;
