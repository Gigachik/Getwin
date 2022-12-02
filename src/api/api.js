import axios from "axios";

const dashboardInstance = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
});
dashboardInstance.interceptors.response.use((response) => response.data);

export const dashboardApi = {
  getPokemons: (offset) => {
    return dashboardInstance.get(`pokemon?limit=12&offset=${offset}`);
  },
  getPokemonsProfile: (name) => {
    return dashboardInstance.get(`pokemon/${name}`);
  },
  getPokemonsType: () => {
    return dashboardInstance.get(`type`);
  },
  getPokemonsByType: (query) => {
    return dashboardInstance.get(`type/${query}`);
  },
};
