"use strict";

const { CATEGORIES_PRODUCTS_SCHEMA, tableName: tableNameCategoriesProducts } = require("../models/categories_products.model");
const { PRODUCT_SCHEMA, tableName: tableNameProduct } = require("../models/product.model");
const { CATEGORY_SCHEMA, tableName: tableNameCategory } = require("../models/category.model");

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(tableNameProduct, PRODUCT_SCHEMA);
    await queryInterface.createTable(tableNameCategory, CATEGORY_SCHEMA);
    await queryInterface.createTable(tableNameCategoriesProducts, CATEGORIES_PRODUCTS_SCHEMA);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(tableNameProduct);
    await queryInterface.dropTable(tableNameCategory);
    await queryInterface.dropTable(tableNameCategoriesProducts);//api para rollback del sistema mi tabla con mi schema
  }
};
