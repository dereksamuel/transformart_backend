const { authMiddleware } = require("../../middlewares/authMiddleware.middlewares");

module.exports = ({ models }) => ({
  async createCategory(root, data) {
    const isAuthenticate = await authMiddleware(process.req);

    if (isAuthenticate.isError) {
      throw new Error(isAuthenticate.message);
    }

    const newCategory = await models.Category.create(data);
    return newCategory;
  },

  async updateCategory(root, data) {
    const isAuthenticate = await authMiddleware(process.req);

    if (isAuthenticate.isError) {
      throw new Error(isAuthenticate.message);
    }

    const category = await root.Query.getCategory(root, { categoryId: data.id });
    const response = await category.update(data);

    return response;
  },

  async deleteCategory(root, { id }) {
    const isAuthenticate = await authMiddleware(process.req);

    if (isAuthenticate.isError) {
      throw new Error(isAuthenticate.message);
    }

    const category = await root.Query.getCategory(root, { categoryId: id });
    await category.destroy();

    return id;
  }
});
