const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.URI);

module.exports = {
	sequelize
};
