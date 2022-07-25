const { sequelize: { models } } = require("../utils/sequelize");

// queries
const productQueries = require("./queries/product.queries");
const categoriesQueries = require("./queries/category.queries");
const categoriesProductQueries = require("./queries/categories_products.queries");

// mutations
const auth = require("./mutations/auth.mutations");
const productMutations = require("./mutations/product.mutations");
const categoriesMutations = require("./mutations/category.mutations");
const categoriesProductMutations = require("./mutations/categories_products.mutations");

const options = {
  models
};

module.exports = {
  Query: {
    ...productQueries(options),
    ...categoriesProductQueries(options),
    ...categoriesQueries(options)
  },
  Mutation: {
    ...auth(),
    ...productMutations(options),
    ...categoriesProductMutations(options),
    ...categoriesMutations(options)
  }
};
