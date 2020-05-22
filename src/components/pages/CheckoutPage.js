import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DeleteOrderModal from "../DeleteOrderModal";
import createBrowserHistory from "../../history";

import { fetchOrder, deleteOrder } from "../../actions";

const CheckoutPage = () => {
  return (
    <div className='ui container'>
      <div>
        <h1> Almost finished! </h1>
        <h3> Please select one of the following options.</h3>
        <br></br>
      </div>
      <Link to='/edit-order/:id'>
        <button className='ui primary button'>Update your cart</button>
      </Link>
      <Link to='/delete-order/:id'>
        <button className='ui negative button'>Delete entire order </button>
      </Link>
      <Link to='/final-page'>
        <button className='ui positive button'>
          Checkout, and dispense my items
        </button>{" "}
      </Link>
    </div>
  );
};

export default CheckoutPage;

// eventually, when user clicks on Update your cart, it will show same popup with the current users
// order in the h1.  Alongside this, will be

//orderList gives good insight on how to set up edit order if user clicks that button
