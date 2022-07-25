const { Model, DataTypes, Sequelize } = require("sequelize");

const PRODUCT_TABLE_NAME = "products";
const PRODUCT_MODEL_NAME = "Product";

class Product extends Model {
  static associate(models) { // sequelize.models.SomeModel
    this.hasMany(models.CategoriesProducts, {
      as: PRODUCT_TABLE_NAME,
      foreignKey: "id",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE_NAME,
      modelName: PRODUCT_MODEL_NAME,
      timestamps: false
    };
  }
} // represents a table in my database

const PRODUCT_SCHEMA = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  offer: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  srcImage: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: "src_image"
  },
  srcVideo: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: "src_video"
  },
  facebookLink: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: "facebook_link"
  },
  instagramLink: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: "instagram_link"
  },
  tweeterLink: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: "tweeter_link"
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    field: "created_at"
  }
};

module.exports = {
  Product,
  PRODUCT_SCHEMA,
  tableName: PRODUCT_TABLE_NAME,
  PRODUCT_MODEL_NAME
};
