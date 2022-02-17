"use strict";

const { ProductSchema, tableName: tableNameProduct } = require("../models/product.model");

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(tableNameProduct, ProductSchema);//api para crear mi tabla con mi schema
  },

  async down (queryInterface) {
    await queryInterface.drop(tableNameProduct);//api para rollback del sistema mi tabla con mi schema
  }
};

// addColumn(tableName, field, structureOfMyField) or removeColumn(tableName, field)
