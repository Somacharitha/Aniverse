const axios = require("axios");

const JIKAN_BASE = "https://api.jikan.moe/v4";

// search anime
exports.searchAnime = async (query) => {
  const res = await axios.get(`${JIKAN_BASE}/anime?q=${query}`);
  return res.data.data;
};

// trending anime
exports.getTrendingAnime = async () => {
  const res = await axios.get(`${JIKAN_BASE}/top/anime`);
  return res.data.data;
};
// get anime details
exports.getAnimeDetails = async (id) => {

  const res = await axios.get(`${JIKAN_BASE}/anime/${id}`);

  return res.data.data;

};