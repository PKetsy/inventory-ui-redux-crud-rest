import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DeleteOrderModal from "../DeleteOrderModal";
import createBrowserHistory from "../../history";
import { fetchOrder, deleteOrder } from "../../actions";

class DeleteOrder extends React.Component {
  componentDidMount() {
    this.props.fetchOrder(this.props.match.params.id);
  }

  renderActions() {
    const id = this.props.match.params.id;
    //pre assignment to line 19
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteOrder(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/order-list" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  //using React.Fragment when we want to return many elements, but not have presence inside the actual DOM
  renderContent() {
    if (!this.props.order) {
      return "There seems to be no order to delete...";
    }
    return "Are you sure you want to delete your entire order?";
  }

  render() {
    return (
      <DeleteOrderModal
        title="Delete Order"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => createBrowserHistory.push("/order-list")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { order: state.orders[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchOrder, deleteOrder })(
  DeleteOrder
);
