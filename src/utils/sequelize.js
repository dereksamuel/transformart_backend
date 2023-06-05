const { Sequelize } = require("sequelize");
const { setupModels } = require("../db/models");

// initializing Sequelize
const sequelize = new Sequelize(process.env.URI, {
  dialect: process.env.NODE_ENV === "development" ? "sqlite" : "mysql",
});

setupModels(sequelize);

// sequelize.sync();// crear estructura de models NO SE ACONSEJA PARA PROD

module.exports = {
  sequelize
};
