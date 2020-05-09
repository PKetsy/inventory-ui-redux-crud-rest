import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import { Redirect } from 'react-router-dom'

class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "273333841824-d60tqgsi6tan1qlbua670n9rgoc09u9h.apps.googleusercontent.com",
          scope: "email profile",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          //after lib initializes, we assign auth instance to this.auth
          this.onAuthChange(this.auth.isSignedIn.get());
          //next this updates Auth state in the Redux Store
          this.auth.isSignedIn.listen(this.onAuthChange);
          //this line is wired up with onAuthChange, and this changes authentication status
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      //must send this Id to action creator as an argument, and pass it through the reducer by
      // assigning an Id to action object as a payload property.
    } else {
      this.props.signOut();
    }
  };
  //this prints authentication state 'on-the-fly', and is called whenever authentication status changes

  onSignInClick = () => {
    this.auth.signIn().then(value => {
      this.setState({ redirect: true })
    });
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return this.state.redirect ? <Redirect to='/choose-options' /> : <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
  //only reference to 'state' in this file.
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
