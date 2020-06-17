import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions/actionTypes";

const initialState = {
  favorite: []
};

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, action.idEmoji]
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, action.idEmoji]
      };

    default:
      return state;
  }
}
