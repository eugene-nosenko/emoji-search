import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions/actionTypes";

const initialState = {
  favorite: []
};

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, action.codePointHex]
      };

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite.filter(id => id !== action.codePointHex)]
        // favorite: [...state.favorite.filter(codePointHex => !favorite.includes(action.codePointHex))]
      };

    default:
      return state;
  }
}
