const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/aniverse.db",
  logging: false
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ SQLite connected successfully");
  } catch (error) {
    console.error("❌ SQLite connection failed:", error);
  }
};

module.exports = { sequelize, connectDB };