import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};
//initializers help reducer know if the value of isSignedin (or out) === null

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
// using ... (spread syntax) because we are modifying properties.  It means takes all values out
//  of state argument, put it into new object, and also update isSignedIn property to true & vise versa
