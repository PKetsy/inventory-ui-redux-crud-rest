import React from "react";
import { Link } from "react-router-dom";

const ChooseOptions = () => {
  return (
    <div className="ui container">
      <div>
        <h1>Welcome to the store! What would you like to do?</h1>
      </div>
      <br></br>
      <Link to="/pages/CreateOrder">
        <button className="ui primary button">Create an order</button>
      </Link>
      <button className="ui button">Check to see what is left</button>
    </div>
  );
};

export default ChooseOptions;

//in this file add a <Link> that pulls up a window that shows the inventory state
