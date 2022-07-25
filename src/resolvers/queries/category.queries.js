module.exports = ({ models }) => ({
  async getCategories() {
    const categories = models.Category.findAll();
    return categories;
  },

  async getCategory(root, { categoryId }) {
    const category = await models.Category.findByPk(categoryId);

    if (!category) {
      console.error("Category was not found");
      return [];
    }

    return category;
  }
});
