import React from "react";
import { connect } from "react-redux";
import { fetchOrder } from "../../actions";

class EditOrder extends React.Component {
  componentDidMount() {
    this.props.fetchOrder(this.props.match.params.id);
  }
  render() {
    if (!this.props.orders.ruler) {
      return <div> Seems to be a problem </div>;
    }
    return <div> Test </div>;
    //Edit order is having same problem as OrderList.  Only displaying 1 item instead of all
  }
}

const mapStateToProps = (state, ownProps) => {
  return { orders: state.orders[ownProps.match.params.id] };
};
//mapStateToProps getting called with 2 arguments, 1st is all state out of redux store
// 2nd is the props object that shows up inside of our component.

export default connect(mapStateToProps, { fetchOrder })(EditOrder);
