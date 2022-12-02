import { dashboardApi } from "api/api";
import { TOGGLE_LOADING, SET_POKEMON } from "./constants";

export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload,
});
export const isLoading = (isLoading) => ({
  type: TOGGLE_LOADING,
  isLoading,
});

/* THUNK CREATOR */

export const getPokemonsProfile = (name) => async (dispatch) => {
  dispatch(isLoading(true));
  try {
    const data = await dashboardApi.getPokemonsProfile(name);
    dispatch(isLoading(false));
    dispatch(setPokemon(data));
  } catch (error) {
    dispatch(isLoading(false));
  }
};
