const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Watchlist = sequelize.define("Watchlist", {

  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

  image: {
    type: DataTypes.STRING
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "plan-to-watch"
  },

  episodesWatched: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },

  totalEpisodes: {
    type: DataTypes.INTEGER
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

});

module.exports = Watchlist;