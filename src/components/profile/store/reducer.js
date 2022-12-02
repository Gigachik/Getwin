import { TOGGLE_LOADING, SET_POKEMON } from "./constants";

const initialState = {
  isLoading: false,
  pokemon: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
