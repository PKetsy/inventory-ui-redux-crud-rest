import _ from "lodash";
import {
  FETCH_ORDER,
  FETCH_ORDERS,
  CREATE_ORDER,
  EDIT_ORDER,
  DELETE_ORDER,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    //creating new object, taking records out of our state and adding them in
    //mapKeys takes list of orders from API, makes them into objects, and takes the key of the id
    case FETCH_ORDER:
      return { ...state, [action.payload.id]: action.payload };
    //this is key interperlation
    case CREATE_ORDER:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ORDER:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ORDER:
      return _.omit(state, action.payload);
    //no need for .id in here because in actions folder-index.js, the deleteOrder dispatch
    //  has the payload of id in it already.
    default:
      return state;
  }
};

//  we are getting back single record from API, and take that record and add it into our state object
