const { Sequelize } = require("sequelize");
const { setupModels } = require("../db/models");

// initializing Sequelize
const sequelize = new Sequelize(process.env.URI, {
	dialect: process.env.NODE_ENV === "development" ? "sqlite" : "mysql",
	logging: (log) => console.log(log), // to see in console consult
});

setupModels(sequelize);

// sequelize.sync();// crear estructura de models NO SE ACONSEJA PARA PROD

module.exports = {
	sequelize
};
