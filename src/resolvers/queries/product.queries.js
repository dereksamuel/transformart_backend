module.exports = ({ models }) => ({
  async getProducts() {
    // const uid = "eOtXEmtY2FWA2mjsdxgYdRG02jl2";

    // const response = await auth.getUser(uid);

    // console.log("FTECHEDDK", response.toJSON());

    const products = await models.Product.findAll();
    return products;
  },

  async getProduct(root, { productId }) {
    const product = await models.Product.findByPk(productId);

    if (!product) {
      console.error("Product not founded");
      return [];
    }

    return product;
  }
});
