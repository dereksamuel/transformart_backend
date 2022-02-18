const { sequelize: { models } } = require("../utils/sequelize");

// queries
const productQueries = require("./queries/product.queries");

module.exports = {
	Query: {
		...productQueries(models)
	}
};
