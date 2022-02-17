const { CategoriesProducts, CategoriesProductsSchema } = require("./categories_products.model");
const { Product, ProductSchema } = require("./product.model");

function setupModels(sequelize) {
  Product.init(ProductSchema, Product.config(sequelize));
  CategoriesProducts.init(CategoriesProductsSchema, CategoriesProducts.config(sequelize));

  CategoriesProducts.associate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = {
  setupModels
};
