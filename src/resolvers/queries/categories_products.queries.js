const attributes = ["id", ["categories_id", "categoriesId"], ["products_id", "productsId"]];

module.exports = ({ models }) => ({
  async getCategoriesProducts() {
    const where = process.req.headers.filterswherecp;

    const categoriesProducts = await models.CategoriesProducts.findAll({
      attributes,
      where: where ? JSON.parse() : {}
    });
    // FIXME: $or pasar to string from object                                                 
    return categoriesProducts;
  },

  async getCategoriesProduct(root, { categoriesProductsId }) {
    const categoriesProduct = await models.CategoriesProducts.findByPk(categoriesProductsId, {
      attributes
    });

    if (!categoriesProduct) {
      console.error("categoriesProduct not founded");
      return [];
    }

    return categoriesProduct;
  }
});
