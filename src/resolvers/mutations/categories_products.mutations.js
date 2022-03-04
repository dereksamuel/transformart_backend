module.exports = ({ models }) => ({
  async createCategoriesProduct(root, data) {
    const newCategory = await models.CategoriesProducts.create(data);
    return newCategory;
  },

  async updateCategoriesProduct(root, data) {
    const categoriesProduct = await root.Query.getCategoriesProduct(root, { categoryId: data.id });
    const response = await categoriesProduct.update(data);

    return response;
  },

  async deleteCategoriesProduct(root, { id }) {
    const categoriesProduct = await root.Query.getCategoriesProduct(root, { categoryId: id });
    await categoriesProduct.destroy();

    return id;
  }
});
