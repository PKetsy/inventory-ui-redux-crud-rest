import { combineReducers } from "redux";
import { reducer as listReducer } from "redux-form";
import authReducer from "./authReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  auth: authReducer,
  form: listReducer,
  orders: orderReducer,
});
