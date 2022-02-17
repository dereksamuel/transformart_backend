"use strict";

const { CategoriesProductsSchema, tableName: tableNameCategoriesProducts } = require("../models/categories_products.model");
const { ProductSchema, tableName: tableNameProduct } = require("../models/product.model");

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(tableNameCategoriesProducts, CategoriesProductsSchema);
    await queryInterface.createTable(tableNameProduct, ProductSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(tableNameCategoriesProducts);//api para rollback del sistema mi tabla con mi schema
    await queryInterface.drop(tableNameProduct);
  }
};
