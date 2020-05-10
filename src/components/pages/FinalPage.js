import React from "react";
import GoogleAuth from "../GoogleAuth";

const FinalPage = () => {
  return (
    <div className="ui container">
      <div>
        <h1>Thank you UserId! Please make sure to grab all dispensed items!</h1>
      </div>
      <GoogleAuth />
    </div>
  );
};

export default FinalPage;
