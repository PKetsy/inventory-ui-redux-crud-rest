import React from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div className="ui container">
      <div>
        <h1> UserId's Order: [ SHOWS THEIR ORDER HERE ] </h1>
        <h3>
          {" "}
          Please note: If you wish to update your cart, only pre-selected items
          you chose in "Create Order" can be updated. If you wish to add a
          different item in your cart, please click 'Delete entire order' and
          start over.
        </h3>
        <br></br>
      </div>
      <Link to="/stream-create">
        <button className="ui primary button">Update your cart</button>
      </Link>
      <button className="ui negative button">Delete entire order </button>
      <Link to="/final-page">
        <button className="ui positive button">
          Checkout, and dispense my items
        </button>{" "}
      </Link>
    </div>
  );
};

export default CheckoutPage;

// eventually, when user clicks on Update your cart, it will show same popup with the current users
// order in the h1.  Alongside this, will be
