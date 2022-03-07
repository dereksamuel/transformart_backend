/* eslint-disable no-undef */
const categoriesProductsMutations = require("../resolvers/mutations/categories_products.mutations");
const categoriesProductsQueries = require("../resolvers/queries/categories_products.queries");

const { JSONparser } = require("../utils/parser");

const categoryProductsMock = {
  productsId: 1,
  categoriesId: 1
};

describe("-- CategoryProduct Queries --", () => {
  let mutations = null;
  let queries = null;

  let categoriesProducts = [];
  let categoriesProduct = null;
  let categoriesProductCreated = null;

  beforeAll(() => {
    queries = categoriesProductsQueries({ models: process.models, });
    mutations = categoriesProductsMutations({ models: process.models, });
  });

  test("getCategories", async () => {
    categoriesProducts = JSONparser(await queries.getCategoriesProducts());

    expect(categoriesProducts).not.toBe(undefined);
    expect(Array.isArray(categoriesProducts)).toBeTruthy();
    expect(categoriesProducts.length).not.toBe(0);
  });

  test("getCategoriesProduct", async () => {
    categoriesProduct = JSONparser(await queries.getCategoriesProduct(null, {
      categoriesProductsId: `${categoriesProducts[0].id}`
    }));

    expect(categoriesProduct).not.toBe(undefined);
    expect(Array.isArray(categoriesProduct)).toBeFalsy();
    expect(Object.keys(categoriesProduct).length).not.toBe(0);
  });

  test("createCategoriesProduct", async () => {
    categoriesProductCreated = JSONparser(await mutations.createCategoriesProduct(null, categoryProductsMock));

    expect(categoriesProductCreated).not.toBe(undefined);
    expect(Array.isArray(categoriesProductCreated)).toBeFalsy();
    expect(Object.keys(categoriesProductCreated).length).not.toBe(0);
  });

  test("updateCategoriesProduct", async () => {
    categoriesProductCreated = JSONparser(await mutations.updateCategoriesProduct({
      Query: queries
    }, {
      id: categoriesProductCreated.id,
      ...categoryProductsMock
    }));

    expect(categoriesProductCreated).not.toBe(undefined);
    expect(Array.isArray(categoriesProductCreated)).toBeFalsy();
    expect(Object.keys(categoriesProductCreated).length).not.toBe(0);
  });

  test("deleteCategoriesProduct", async () => {
    const categoriesProductDeleted = JSONparser(await mutations.deleteCategoriesProduct({
      Query: queries
    }, { id: categoriesProductCreated.id }));

    expect(categoriesProductDeleted).toBeTruthy();
  });
});
