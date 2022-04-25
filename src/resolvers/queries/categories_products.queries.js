const attributes = ["id", ["categories_id", "categoriesId"], ["products_id", "productsId"]];

module.exports = ({ models }) => ({
  async getCategoriesProducts() {
    let $or = process.req.headers.filters$orcp;
    $or = $or.length ? JSON.parse($or) : null;

    const categoriesProducts = await models.CategoriesProducts.findAll({
      attributes,
      where: $or ? {
        $or
      } : {}
    });
    // FIXME:  FIX $OR ERROR INVALID VALUE                                                 
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
