import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchOrder, editOrder } from "../../actions";
import OrderForm from "./OrderForm";

class EditOrder extends React.Component {
  componentDidMount() {
    this.props.fetchOrder(this.props.match.params.id);
    //calling action creator
  }

  onSubmit = (formValues) => {
    this.props.editOrder(this.props.match.params.id, formValues);
    //calling action creator
  };

  render() {
    if (!this.props.orders) {
      return <div> Seems to be a problem!</div>;
    }
    return (
      <div>
        <h3>Edit your order</h3>
        <OrderForm
          initialValues={_.pick(
            this.props.orders,
            "Rulers",
            "Highlighters",
            "Notebooks",
            "Pencils",
            "Pens",
            "StaplePacks",
            "StickyNotePacks"
          )}
          //outside {}'s = we will write some JS expression in our JSX
          // 2nd {}'s = we are creating a normal object
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { orders: state.orders[ownProps.match.params.id] };
};
//mapStateToProps getting called with 2 arguments, 1st is all state out of the redux store
// 2nd is the props object that shows up inside of our component

export default connect(mapStateToProps, { fetchOrder, editOrder })(EditOrder);

// What is going on in this file: EditOrder component shows a Redux Form wrapped version of our
// OrderForm.  We pass a prop from EditOrder called initialValues from OrderEdit to OrderForm, that
// initialValues prop will be used as initialValues for the Form.
