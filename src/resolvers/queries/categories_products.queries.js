module.exports = (models) => ({
  async getCategoriesProducts() {
    const categoriesProducts = await models.CategoriesProducts.findAll();
    return categoriesProducts;
  },

  async getCategoriesProduct(root, { categoriesProductsId }) {
    const categoriesProduct = await models.CategoriesProducts.findByPk(categoriesProductsId);

    if (!categoriesProduct) {
      console.error("categoriesProduct not founded");
      return [];
    }

    return categoriesProduct;
  }
});