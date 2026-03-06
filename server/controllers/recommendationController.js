const Watchlist = require("../models/Watchlist");
const axios = require("axios");

exports.getRecommendations = async (req, res) => {

  try {

    const watchlist = await Watchlist.findAll({
      where: { userId: req.user.id }
    });

    if (watchlist.length === 0) {
      return res.json({
        message: "Watchlist empty. Add anime first."
      });
    }

    const randomAnime = watchlist[Math.floor(Math.random() * watchlist.length)];

    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${randomAnime.title}`
    );

    const recommendations = response.data.data.slice(0, 10);

    res.json(recommendations);

  } catch (err) {

    res.status(500).json({
      message: "Failed to fetch recommendations"
    });

  }

};