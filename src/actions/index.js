import orders from "../apis/orders";
import createBrowserHistory from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_ORDER,
  FETCH_ORDERS,
  FETCH_ORDER,
  EDIT_ORDER,
  DELETE_ORDER,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
    //whatever 'type' we choose must be in CAPS, and used with case statements!  (see authReducer.js)
  };
};
//action creator1

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
//action creator2

export const createOrder = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await orders.post("/orders", { ...formValues, userId });
  //vid 254 explains
  // action creators can have handles on them (const response=await), we would then want to dispatch
  // an action with a payload of the order.  A reducer we will create will allow us to save that

  dispatch({ type: CREATE_ORDER, payload: response.data });
  //using response.data because we only care about the information returned inside the request
  // after the response from axios, the response object has information inside of it

  createBrowserHistory.push("/checkout-page");
  //programmatic navigation to get user back to OrderList after installing {createBrowserRouter}
};

export const fetchOrders = () => async (dispatch) => {
  const response = await orders.get("/orders");

  dispatch({ type: FETCH_ORDERS, payload: response.data });
};

export const fetchOrder = (id) => async (dispatch) => {
  const response = await orders.get(`/orders/${id}`);

  dispatch({ type: FETCH_ORDER, payload: response.data });
};

export const editOrder = (id, formValues) => async (dispatch) => {
  const response = await orders.patch(`/orders/${id}`, formValues);

  dispatch({ type: EDIT_ORDER, payload: response.data });
  createBrowserHistory.push("/checkout-page");
};

export const deleteOrder = (id) => async (dispatch) => {
  await orders.delete(`/orders/${id}`);

  dispatch({ type: DELETE_ORDER, payload: id });
  createBrowserHistory.push("/order-list");
};
