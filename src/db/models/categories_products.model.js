const { Model, DataTypes } = require("sequelize");
const { tableName: productTableName } = require("./product.model");

class CategoriesProducts extends Model {
  static associate(models) {
    this.belongsTo(models.Product, { as: "product" });
    // this.belongsTo(models.Product, { as: "" }); UNO A UNO
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: "categories_products",
      modelName: "CategoriesProducts",
      timestamps: false
    };
  }
}

const CategoriesProductsSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  categoriesId: {
    field: "categories_id",
    type: DataTypes.INTEGER,
    allowNull: false
    // references: {
    //   model: productTableName,
    //   key: id
    // },
    // onUpdate: "CASCADE",
    // onDelete: "CASCADE"
  },
  productsId: {
    field: "products_id",
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: productTableName,
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  },
};

module.exports = {
  CategoriesProductsSchema,
  CategoriesProducts,
  tableName: "categories_products",
};
