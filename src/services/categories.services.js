class CategoryService {
  constructor() {
    this.categories = [
      {
        id: "a1212s5-12445a8-78s7-dsd-ss4d85s78s57878",
        name: "Cerdos decorativos",
        productsIds: [
          "as5a878s7dsds5",
          "as5a878s7d5"
        ], 
      }
    ];
  }

  findCategory({ id }) {
    return this.categories.find((category) => category.id === id);
  }
}

module.exports = {
  CategoryService
};
