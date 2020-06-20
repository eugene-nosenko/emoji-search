import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "./actionTypes";

export function addToFavorite(codePointHex, uid = "unknownUser") {
  return {
    type: ADD_TO_FAVORITE,
    codePointHex,
    uid
  };
}

export function removeFromFavorite(codePointHex, uid = "unknownUser") {
  return {
    type: REMOVE_FROM_FAVORITE,
    codePointHex,
    uid
  };
}
