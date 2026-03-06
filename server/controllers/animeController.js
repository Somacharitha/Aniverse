const {
  searchAnime,
  getTrendingAnime,
  getAnimeDetails
} = require("../utils/jikanService");

exports.search = async (req, res) => {
  try {

    const query = req.query.q;

    const anime = await searchAnime(query);

    res.json(anime);

  } catch (error) {
    res.status(500).json({ message: "Failed to fetch anime" });
  }
};

exports.trending = async (req, res) => {
  try {

    const anime = await getTrendingAnime();

    res.json(anime);

  } catch (error) {
    res.status(500).json({ message: "Failed to fetch trending anime" });
  }
};
// GET ANIME DETAILS
exports.getDetails = async (req, res) => {

  try {

    const id = req.params.id;

    const anime = await getAnimeDetails(id);

    res.json(anime);

  } catch (err) {

    res.status(500).json({
      message: "Failed to fetch anime details"
    });

  }

};