const { sequelize: { models } } = require("../utils/sequelize");

// queries
const productQueries = require("./queries/product.queries");
const categoriesProductQueries = require("./queries/categories_products.queries");

// mutations
const productMutations = require("./mutations/product.mutations");
const categoriesProductMutations = require("./mutations/categories_products.mutations");

module.exports = {
  Query: {
    ...productQueries(models),
    ...categoriesProductQueries(models)
  },
  Mutation: {
    ...productMutations(models),
    ...categoriesProductMutations(models)
  },
};
