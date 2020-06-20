import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions/actionTypes";

// const favorite = {
//   id1: "[1, 2, 3]",
//   id2: "[1, 2, 3]",
//   id3: "[1, 2, 3]",
// }

const initialState = {
  favorite: {}
};

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITE: {
      const arrayById = state.favorite[action.uid] || [];

      return {
        ...state,
        favorite: { ...state.favorite, [action.uid]: [...arrayById, action.codePointHex] }
      };
    }

    case REMOVE_FROM_FAVORITE: {
      const arrayById = state.favorite[action.uid] || [];
      return {
        ...state,
        favorite: {
          ...state.favorite,
          [action.uid]: arrayById.filter(id => id !== action.codePointHex)
        }
      };
    }

    default:
      return state;
  }
}
