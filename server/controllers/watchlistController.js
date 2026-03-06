const Watchlist = require("../models/Watchlist");
const { success, error } = require("../utils/response");


// ADD ANIME
exports.addAnime = async (req, res) => {
  try {

    const { title, image, totalEpisodes } = req.body;

    const anime = await Watchlist.create({
      title,
      image,
      totalEpisodes,
      userId: req.user.id
    });

    success(res, anime, "Anime added to watchlist");

  } catch (err) {

    error(res, "Server error");

  }
};



// GET USER WATCHLIST
exports.getWatchlist = async (req, res) => {
  try {

    const list = await Watchlist.findAll({
      where: { userId: req.user.id }
    });

    success(res, list, "Watchlist fetched successfully");

  } catch (err) {

    error(res, "Server error");

  }
};



// UPDATE ANIME STATUS
exports.updateAnime = async (req, res) => {
  try {

    const anime = await Watchlist.findByPk(req.params.id);

    if (!anime) {
      return error(res, "Anime not found", 404);
    }

    await anime.update(req.body);

    success(res, anime, "Anime updated successfully");

  } catch (err) {

    error(res, "Server error");

  }
};



// DELETE ANIME
exports.deleteAnime = async (req, res) => {
  try {

    const anime = await Watchlist.findByPk(req.params.id);

    if (!anime) {
      return error(res, "Anime not found", 404);
    }

    await anime.destroy();

    success(res, null, "Anime removed from watchlist");

  } catch (err) {

    error(res, "Server error");

  }
};



// GET WATCHLIST STATS
exports.getStats = async (req, res) => {
  try {

    const list = await Watchlist.findAll({
      where: { userId: req.user.id }
    });

    const stats = {
      total: list.length,
      watching: list.filter(a => a.status === "watching").length,
      completed: list.filter(a => a.status === "completed").length,
      planToWatch: list.filter(a => a.status === "plan-to-watch").length,
      onHold: list.filter(a => a.status === "on-hold").length,
      dropped: list.filter(a => a.status === "dropped").length
    };

    success(res, stats, "Watchlist statistics fetched");

  } catch (err) {

    error(res, "Failed to fetch stats");

  }
};