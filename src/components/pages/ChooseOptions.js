import React from "react";
import { Link } from "react-router-dom";

const ChooseOptions = (userId) => (
  <div className="ui container">
    <div>
      <center>
        <h1>Hello, welcome to the Office Supply vending machine!</h1>
      </center>
    </div>
    <br></br>
    <center>
      <h3>
        To begin, click 'Create an order' and enter values as numbers. Once you
        are satisfied with your order, click on 'Checkout'.
      </h3>
    </center>
    <br></br>
    <Link to="/create-order">
      <button className="ui primary button">Create an order</button>
    </Link>
  </div>
);

export default ChooseOptions;

//in this file add a <Link> that pulls up a window that shows the inventory state
