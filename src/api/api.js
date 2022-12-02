import axios from "axios";

const dashboardInstance = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
});
dashboardInstance.interceptors.response.use((response) => response.data);

export const dashboardApi = {
  getPokemons: (offset) => {
    return dashboardInstance.get(`pokemon?limit=20&offset=${offset}`);
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

// В API не нашел возможности ограничить вывод покемонов, когда есть выбор по типу. Из за этого не реализован инфинитискролл при выборе по типу покемона
