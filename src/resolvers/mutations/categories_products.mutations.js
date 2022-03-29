module.exports = ({ models }) => ({
  async createCategoriesProduct(root, data) {
    if (!global.decodedToken) {
      throw new Error("Unauthorized");
    }

    const newCategory = await models.CategoriesProducts.create(data);
    return newCategory;
  },

  async updateCategoriesProduct(root, data) {
    if (!global.decodedToken) {
      throw new Error("Unauthorized");
    }//auth/id-token-expired

    const categoriesProduct = await root.Query.getCategoriesProduct(root, { categoriesProductsId: data.id });
    const response = await categoriesProduct.update(data);

    return response;
  },

  async deleteCategoriesProduct(root, { id }) {
    if (!global.decodedToken) {
      throw new Error("Unauthorized");
    }

    const categoriesProduct = await root.Query.getCategoriesProduct(root, { categoriesProductsId: id });
    await categoriesProduct.destroy();

    return id;
  }
});
