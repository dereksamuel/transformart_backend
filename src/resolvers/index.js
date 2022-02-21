const { sequelize: { models } } = require("../utils/sequelize");

// queries
const productQueries = require("./queries/product.queries");
const categoriesQueries = require("./queries/category.queries");
const categoriesProductQueries = require("./queries/categories_products.queries");

// mutations
const productMutations = require("./mutations/product.mutations");
const categoriesMutations = require("./mutations/category.mutations");
const categoriesProductMutations = require("./mutations/categories_products.mutations");

module.exports = {
  Query: {
    ...productQueries(models),
    ...categoriesProductQueries(models),
    ...categoriesQueries(models)
  },
  Mutation: {
    ...productMutations(models),
    ...categoriesProductMutations(models),
    ...categoriesMutations(models)
  },
};
