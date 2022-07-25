/* eslint-disable no-undef */
const categoriesProductsMutations = require("../resolvers/mutations/categories_products.mutations");
const categoriesProductsQueries = require("../resolvers/queries/categories_products.queries");

const { JSONparser } = require("../utils/parser");

const categoryProductsMock = {
  productsId: 1,
  categoriesId: 17
};

global.decodedToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2NzNkM2M5NDdhZWIxOGI2NGU1OGUzZWRlMzI1NWZiZjU3NTI4NWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdHJhbnNmb3JtLWFydCIsImF1ZCI6InRyYW5zZm9ybS1hcnQiLCJhdXRoX3RpbWUiOjE2NTA2NjE3NjgsInVzZXJfaWQiOiJlT3RYRW10WTJGV0EybWpzZHhnWWRSRzAyamwyIiwic3ViIjoiZU90WEVtdFkyRldBMm1qc2R4Z1lkUkcwMmpsMiIsImlhdCI6MTY1MDY2MTc2OCwiZXhwIjoxNjUwNjY1MzY4LCJlbWFpbCI6ImhlY3Rvcm1hbnVlbGNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhlY3Rvcm1hbnVlbGNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.OxY2JfTLaCXSvCE6P5TXMJD-UweD0LYdlLztCP9x8oGj0UPrAFai7v1BX4217BFExrRlvehB7JYszzckzHaEIbyp0O_J-JeO3emeArvlxxHz30fc3mD67dIINf6uC-rTYPsUAgM5L1ZEV53n-Vpk7IPFxGz8-ukb1tl95CQDoqWShtgdP4NyBm6v6V8yEnzNoeWQj1y1qK9CQ7HQ6F9xXo6GSffiu6IPDnFja1nu-qkk-euenfqS_tAAEzM2eku9DR_j1InqxZsLJ7r9qCQbURwXOSTK6-i2NUmlfvoXVv5f7X7GZd2Svz6kRQJavMAvdRyqmkhticIIFSjsrWFxNQ";

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
