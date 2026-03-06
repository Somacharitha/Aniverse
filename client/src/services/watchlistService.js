import API from "./api";

export const getWatchlist = () => {
  return API.get("/watchlist");
};

export const addAnime = (data) => {
  return API.post("/watchlist", data);
};

export const updateAnime = (id, data) => {
  return API.put(`/watchlist/${id}`, data);
};

export const deleteAnime = (id) => {
  return API.delete(`/watchlist/${id}`);
};