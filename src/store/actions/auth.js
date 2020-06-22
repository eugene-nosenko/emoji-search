import { ADD_USER, REMOVE_USER_FROM_STORE } from "./actionTypes";

export function addUserToStore(userFromFirebase) {
  return {
    type: ADD_USER,
    userFromFirebase
  };
}

export function removeFromStore() {
  return {
    type: REMOVE_USER_FROM_STORE
  };
}
