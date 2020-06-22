import { ADD_USER, REMOVE_USER_FROM_STORE } from "../actions/actionTypes";

const initialState = {
  user: {},
  isSignIn: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.userFromFirebase,
        isSignIn: true
      };

    case REMOVE_USER_FROM_STORE:
      return {
        ...state,
        user: {},
        isSignIn: false
      };

    default:
      return state;
  }
}
