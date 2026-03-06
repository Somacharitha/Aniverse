import API from "./api";

export const getRecommendations = () => {
  return API.get("/recommendations");
};