const { sequelize: { models } } = require("../utils/sequelize");
const { authMiddleware } = require("../middlewares/authMiddleware.middlewares");

// queries
const productQueries = require("./queries/product.queries");
const categoriesQueries = require("./queries/category.queries");
const categoriesProductQueries = require("./queries/categories_products.queries");

// mutations
const productMutations = require("./mutations/product.mutations");
const categoriesMutations = require("./mutations/category.mutations");
const categoriesProductMutations = require("./mutations/categories_products.mutations");

const options = {
  models
};

console.log("Hola2");

module.exports = (req, res) => ({
  Query: {
    ...productQueries(options),
    ...categoriesProductQueries(options),
    ...categoriesQueries(options)
  },
  Mutation: authMiddleware(req, res, {
    ...productMutations(options),
    ...categoriesProductMutations(options),
    ...categoriesMutations(options)
  }),
});
