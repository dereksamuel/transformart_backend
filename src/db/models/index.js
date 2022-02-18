const { CategoriesProducts, CATEGORIES_PRODUCTS_SCHEMA } = require("./categories_products.model");
const { Category, CATEGORY_SCHEMA } = require("./category.model");
const { Product, PRODUCT_SCHEMA } = require("./product.model");

function setupModels(sequelize) {
  // create tables by schemas
  Product.init(PRODUCT_SCHEMA, Product.config(sequelize));
  Category.init(CATEGORY_SCHEMA, Category.config(sequelize));
  CategoriesProducts.init(CATEGORIES_PRODUCTS_SCHEMA, CategoriesProducts.config(sequelize));

  // init relationships
  CategoriesProducts.associate(sequelize.models);
  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
}

module.exports = {
  setupModels
};
