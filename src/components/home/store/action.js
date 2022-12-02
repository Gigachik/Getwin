import { dashboardApi } from "api/api";
import {
  SET_POKEMONS,
  UPDATE_META,
  SET_POKEMONS_TYPE,
  SET_POKEMONS_BY_TYPE,
} from "./constants";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setPokemonsByType = (payload) => ({
  type: SET_POKEMONS_BY_TYPE,
  payload,
});

export const setPokemonsType = (payload) => ({
  type: SET_POKEMONS_TYPE,
  payload,
});

export const updateMeta = (payload) => ({
  type: UPDATE_META,
  payload,
});

/* THUNK CREATOR */

export const getPokemons = (offset) => async (dispatch) => {
  dispatch(updateMeta({ isLoading: true }));
  try {
    const data = await dashboardApi.getPokemons(offset);
    dispatch(setPokemons(data.results));
    dispatch(
      updateMeta({ hasMore: data.length !== 0, isLoading: false, offset })
    );
  } catch (error) {
    dispatch(updateMeta({ isLoading: false }));
  }
};

export const getPokemonsType = () => async (dispatch) => {
  dispatch(updateMeta({ isLoading: true }));
  try {
    const data = await dashboardApi.getPokemonsType();
    dispatch(setPokemonsType(data));
    dispatch(updateMeta({ isLoading: false }));
  } catch (error) {
    dispatch(updateMeta({ isLoading: false }));
  }
};

export const getPokemonsByType = (query) => async (dispatch) => {
  dispatch(updateMeta({ isLoading: true }));
  try {
    const data = await dashboardApi.getPokemonsByType(query);
    const result = data.pokemon.map((item) => Object.values(item)[0]);
    dispatch(setPokemonsByType(result));

    dispatch(updateMeta({ isLoading: false }));
  } catch (error) {
    dispatch(updateMeta({ isLoading: false }));
    console.log("error");
  }
};
