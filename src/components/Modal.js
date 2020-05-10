import React from "react";
import ReactDOM from "react-dom";
import GoogleAuth from "./GoogleAuth";
//continue on modal after learning about CreateBrowserHistory.  Stopped at Video278
//that video will show actions executed after buttons are clicked, Link to next page

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="header">Office Supply Vending</div>
        <div className="content">
          Welcome! To use this service, please Log in with Google.
        </div>
        <div className="actions">
          <GoogleAuth />
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
    //2nd argument is a reference to element that we want to render this portal into
  );
};

export default Modal;

//createPortal's 2 most popular uses are : Creating a Modal, or render some react component into some HTML that was not
// created by our application.  ~ Java app that renders HTML in backend for example
