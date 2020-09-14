import React from "react";
import GoogleAuth from "../GoogleAuth";
import { Link } from "react-router-dom";

const FinalPage = () => {
  return (
    <div className="ui container">
      <div>
        <h1>
          All finished! Please make sure to grab all dispensed items, and don't
          forget to sign out!
        </h1>
      </div>
      <Link to={`/`}>
        <GoogleAuth />
      </Link>
    </div>
  );
};

export default FinalPage;
