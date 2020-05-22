import React from "react";
import { connect } from "react-redux";
import { createOrder } from "../../actions";
import OrderForm from "./OrderForm";

class CreateOrder extends React.Component {
  onSubmit = (formValues) => {
    this.props.createOrder(formValues)
  };

  render() {
    return (
      <div>
        <h3>Create an order</h3>
        <OrderForm onSubmit={this.onSubmit} />
      </div>
  
    );
  }
}

export default connect(null, { createOrder })(CreateOrder);
