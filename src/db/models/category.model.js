const { DataTypes, Model } = require("sequelize");

const CATEGORY_TABLE_NAME = "categories";
const CATEGORY_MODEL_NAME = "Category";

class Category extends Model {
  static associate(models) {
    this.hasMany(models.CategoriesProducts, {
      as: CATEGORY_TABLE_NAME,
      foreignKey: "id",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE_NAME,
      modelName: CATEGORY_MODEL_NAME,
      timestamps: false
    };
  }
}

const CATEGORY_SCHEMA = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
};

module.exports = {
  Category,
  tableName: CATEGORY_TABLE_NAME,
  CATEGORY_MODEL_NAME,
  CATEGORY_SCHEMA
};
