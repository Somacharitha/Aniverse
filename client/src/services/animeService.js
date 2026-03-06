import API from "./api";

export const getTrendingAnime = () => {
  return API.get("/anime/trending");
};

export const searchAnime = (query) => {
  return API.get(`/anime/search?q=${query}`);
};

export const getAnimeById = (id) => {
  return API.get(`/anime/${id}`);
};
