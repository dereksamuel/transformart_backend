const { Op } = require("sequelize");

const attributes = ["id", ["categories_id", "categoriesId"], ["products_id", "productsId"]];

module.exports = ({ models }) => ({
  async getCategoriesProducts() {
    let $or = process.req.headers.filters$orcp;
    $or = $or.length ? JSON.parse($or) : null;

    const categoriesProducts = await models.CategoriesProducts.findAll({
      attributes,
      where: $or ? {
        [Op.or]: $or
      } : {}
    });

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
