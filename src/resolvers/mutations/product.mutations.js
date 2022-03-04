module.exports = ({ models }) => ({
  async createProduct(root, data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  },

  async updateProduct(root, data) {
    const product = await root.Query.getProduct(root, { productId: data.id });
    const response = await product.update(data);

    return response;
  },

  async deleteProduct(root, { id }) {
    const product = await root.Query.getProduct(root, { productId: id });
    await product.destroy();

    return id;
  }
});
