import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "./actionTypes";

export function addToFavorite(codePointHex) {
  return {
    type: ADD_TO_FAVORITE,
    codePointHex
  };
}

export function removeFromFavorite(codePointHex) {
  return {
    type: REMOVE_FROM_FAVORITE,
    codePointHex
  };
}
