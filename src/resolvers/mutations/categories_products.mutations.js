module.exports = (models) => ({
  async createCategory(root, data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  },

  async updateCategory(root, data) {
    const category = await root.Query.getCategory(root, { categoryId: data.id });
    const response = await category.update(data);

    return response;
  },

  async deleteCategory(root, { id }) {
    const category = await root.Query.getCategory(root, { categoryId: id });
    await category.destroy();

    return id;
  }
});
