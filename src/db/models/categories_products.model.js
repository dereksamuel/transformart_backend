const { Model, DataTypes } = require("sequelize");
const { tableName: productTableName } = require("./product.model");
const { tableName: categoryTableName } = require("./category.model");

const CATEGORIES_PRODUCTS_TABLE_NAME = "categories_products";
const CATEGORIES_PRODUCTS_MODEL_NAME = "CategoriesProducts";

class CategoriesProducts extends Model {
  static associate(models) {
    this.belongsTo(models.Product, { as: "product" }); // one to one
    this.belongsTo(models.Category, { as: "category" }); // one to one
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORIES_PRODUCTS_TABLE_NAME,
      modelName: CATEGORIES_PRODUCTS_MODEL_NAME,
      timestamps: false
    };
  }
}

const CATEGORIES_PRODUCTS_SCHEMA = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  categoriesId: {
    field: "categories_id",
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: categoryTableName,
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  },
  productsId: {
    field: "products_id",
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: productTableName,
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  },
};

module.exports = {
  CategoriesProducts,
  CATEGORIES_PRODUCTS_SCHEMA,
  tableName: CATEGORIES_PRODUCTS_TABLE_NAME,
  CATEGORIES_PRODUCTS_MODEL_NAME
};
