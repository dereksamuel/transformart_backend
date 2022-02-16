const { Model, DataTypes, Sequelize } = require("sequelize");

class Product extends Model {
  static associate() {
    //associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: "products",
      modelName: "Product",
      timestamps: false,
    };
  }
} // represents a table in my database

const ProductSchema = {
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
  ProductSchema,
  tableName: "products",
  Product
};
