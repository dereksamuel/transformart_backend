const { authMiddleware } = require("../../middlewares/authMiddleware.middlewares");

module.exports = ({ models }) => ({
  async createCategoriesProduct(root, data) {
    const isAuthenticate = await authMiddleware(process.req);

    if (isAuthenticate.isError) {
      throw new Error(isAuthenticate.message);
    }

    const newCategory = await models.CategoriesProducts.create(data);
    return newCategory;
  },

  async updateCategoriesProduct(root, data) {
    const isAuthenticate = await authMiddleware(process.req);

    if (isAuthenticate.isError) {
      throw new Error(isAuthenticate.message);
    }

    const categoriesProduct = await root.Query.getCategoriesProduct(root, { categoriesProductsId: data.id });
    const response = await categoriesProduct.update(data);

    return response;
  },

  async deleteCategoriesProduct(root, { id }) {
    const isAuthenticate = await authMiddleware(process.req);

    if (isAuthenticate.isError) {
      throw new Error(isAuthenticate.message);
    }

    const categoriesProduct = await root.Query.getCategoriesProduct(root, { categoriesProductsId: id });
    await categoriesProduct.destroy();

    return id;
  }
});
