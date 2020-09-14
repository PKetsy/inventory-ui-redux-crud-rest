import React from "react";
import { Router, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ChooseOptions from "./pages/ChooseOptions";
import CreateOrder from "./pages/CreateOrder";
import EditOrder from "./pages/EditOrder";
import CheckoutPage from "./pages/CheckoutPage";
import DeleteOrder from "./pages/DeleteOrder";
import FinalPage from "./pages/FinalPage";
import OrderList from "./pages/OrderList";
import Header from "./Header";
import createBrowserHistory from "../history";

const App = () => (
  <div className="ui container">
    <Router history={createBrowserHistory}>
      <div>
        <Header />
        {/* //<Header /> must be below <BrowserRouter> so it can make use of Link element */}
        <Route path="/" exact component={LoginPage} />
        <Route path="/choose-options" exact component={ChooseOptions} />
        <Route path="/create-order" exact component={CreateOrder} />
        <Route path="/checkout-page" exact component={CheckoutPage} />
        <Route path="/final-page" exact component={FinalPage} />
        <Route path="/order-list" exact component={OrderList} />
        <Route path="/edit-order/:id" exact component={EditOrder} />
        <Route path="/delete-order/:id" exact component={DeleteOrder} />
      </div>
    </Router>
  </div>
);

export default App;

//with React-Router, each component needs to be designed to work in isolation and fetch its own data
