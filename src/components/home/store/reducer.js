import {
  SET_POKEMONS,
  UPDATE_META,
  SET_POKEMONS_TYPE,
  SET_POKEMONS_BY_TYPE,
} from "./constants";

const initialState = {
  isLoading: false,
  pokemons: [],
  hasMore: true,
  offset: 1,
  types: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload],
      };

    case SET_POKEMONS_TYPE:
      return {
        ...state,
        types: action.payload,
      };

    case SET_POKEMONS_BY_TYPE:
      return {
        ...state,
        pokemons: action.payload,
      };

    case UPDATE_META:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
