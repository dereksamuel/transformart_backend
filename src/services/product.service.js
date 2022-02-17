const { sequelize: { models } } = require("../utils/sequelize");

class ProductService {
  constructor() {}

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async update({ id, data }) {
    const product = await this.getOne({ id });
    const response = await product.update(data);

    return response;
  }

  async delete(id) {
    const product = await this.getOne({ id });
    await product.destroy();

    return { id };
  }

  async getAll({ filters }) {
    const products = await models.Product.findAll();
    return products;
  }

  async getOne({ id }) {
    const product = await models.Product.findByPk(id);

    if (!product) {
      console.error("Product not found");
    }

    return product;
  }
}

module.exports = {
  ProductService
};
