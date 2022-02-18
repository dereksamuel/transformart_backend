const { sequelize: { models } } = require("../utils/sequelize");

// queries
const productQueries = require("./queries/product.queries");

// mutations
const productMutations = require("./mutations/product.mutations");

module.exports = {
  Query: {
    ...productQueries(models)
  },
  Mutation: {
    ...productMutations(models)
  },
};
