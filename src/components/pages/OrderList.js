import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrders } from "../../actions";

class OrderList extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
    //Fetches list of orders, and updates redux store
  }

  renderAdmin(orders) {
    if (orders.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/edit-order/${orders.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/delete-order/${orders.id}`}
            className="ui button negative"
          >
            Delete Order
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.orders.map((order) => (
      <div className="item" key={order.id}>
        {this.renderAdmin(order)}
        <i className="large middle aligned icon pencil" />
        <br></br>
        <div className="content">Rulers: {order.Rulers}</div>
        <div className="content">Highlighters: {order.Highlighters}</div>
        <div className="content">Notebooks: {order.Notebooks}</div>
        <div className="content">Pencils: {order.Pencils}</div>
        <div className="content">Pens: {order.Pens}</div>
        <div className="content">Staple Packs: {order.StaplePacks}</div>
        <div className="content">
          {" "}
          Sticky Note Packs: {order.StickyNotePacks}
        </div>
      </div>
    ));
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/create-order" className="ui button primary">
            Create an order
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Orders</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: Object.values(state.orders),
    //Object.values = built in JS function that takes objects as arguments.  All values are pulled out and put into an array.
    currentUserId: state.auth.userId,
    //gets the ID info into our components
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchOrders })(OrderList);

//we are going to place a class based component because we want to call our action creator INSIDE of
// the componentDidMount Lifecycle method because we only want to fetch our list of streams one time.
