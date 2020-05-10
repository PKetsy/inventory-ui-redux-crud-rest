import React from "react";
import { Router, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ChooseOptions from "./pages/ChooseOptions";
import CreateOrder from "./pages/CreateOrder";
import EditOrder from "./pages/EditOrder";
import CheckoutPage from "./pages/CheckoutPage";
import FinalPage from "./pages/FinalPage";
import OrderList from "./pages/OrderList";
import Header from "./Header";
import createBrowserHistory from "../history";
import { editOrder } from "../actions";

const App = () => {
  return (
    <div className="ui container">
      <Router history={createBrowserHistory}>
        <div>
          <Header />
          {/* //<Header /> must be below <BrowserRouter> so it can make use of Link element */}
          <Route path="/" exact component={LoginPage} />
          <Route path="/pages/ChooseOptions" exact component={ChooseOptions} />
          <Route path="/pages/CreateOrder" exact component={CreateOrder} />
          <Route path="/pages/CheckoutPage" exact component={CheckoutPage} />
          <Route path="/pages/FinalPage" exact component={FinalPage} />
          <Route path="/pages/OrderList" exact component={OrderList} />
          <Route path="/pages/EditOrder/:id" exact component={EditOrder} />
        </div>
      </Router>
    </div>
  );
};

export default App;

//with React-Router, each component needs to be designed to work in isolation and fetch its own data
