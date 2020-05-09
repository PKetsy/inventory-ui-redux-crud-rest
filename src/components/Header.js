import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/order-list" className="item">
        Check past orders here
      </Link>
      <div className="right menu"></div>
      <Link to="/" className="item">
        Goes to Homepage
      </Link>
      <GoogleAuth />
    </div>
  );
};
export default Header;
