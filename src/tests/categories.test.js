/* eslint-disable no-undef */
const categoriesMutations = require("../resolvers/mutations/category.mutations");
const categoriesQueries = require("../resolvers/queries/category.queries");

const { JSONparser } = require("../utils/parser");

const categoryMock = {
  name: "Tester Category name"
};

describe("-- Category Queries --", () => {
  let mutations = null;
  let queries = null;

  let categories = [];
  let category = null;
  let categoryCreated = null;

  beforeAll(() => {
    queries = categoriesQueries({ models: process.models, });
    mutations = categoriesMutations({ models: process.models, });
  });

  test("getCategories", async () => {
    categories = JSONparser(await queries.getCategories());

    expect(categories).not.toBe(undefined);
    expect(Array.isArray(categories)).toBeTruthy();
    expect(categories.length).not.toBe(0);
  });

  test("getCategory", async () => {
    category = JSONparser(await queries.getCategory(null, { categoryId: `${categories[0].id}` }));

    expect(category).not.toBe(undefined);
    expect(Array.isArray(category)).toBeFalsy();
    expect(category.length).not.toBe(0);
  });

  test("createCategory", async () => {
    categoryCreated = JSONparser(await mutations.createCategory(null, categoryMock));

    expect(categoryCreated).not.toBe(undefined);
    expect(Array.isArray(categoryCreated)).toBeFalsy();
    expect(Object.keys(categoryCreated).length).not.toBe(0);
  });

  test("updateCategory", async () => {
    categoryCreated = JSONparser(await mutations.updateCategory({
      Query: queries
    }, {
      id: categoryCreated.id,
      ...categoryMock
    }));

    expect(categoryCreated).not.toBe(undefined);
    expect(Array.isArray(categoryCreated)).toBeFalsy();
    expect(Object.keys(categoryCreated).length).not.toBe(0);
  });

  test("deleteCategory", async () => {
    const categoryDeleted = JSONparser(await mutations.deleteCategory({
      Query: queries
    }, { id: categoryCreated.id }));

    expect(categoryDeleted).toBeTruthy();
  });
});
