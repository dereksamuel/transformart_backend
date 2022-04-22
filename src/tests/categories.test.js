/* eslint-disable no-undef */
const categoriesMutations = require("../resolvers/mutations/category.mutations");
const categoriesQueries = require("../resolvers/queries/category.queries");

const { JSONparser } = require("../utils/parser");

const categoryMock = {
  name: "Tester Category name"
};

global.decodedToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2NzNkM2M5NDdhZWIxOGI2NGU1OGUzZWRlMzI1NWZiZjU3NTI4NWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdHJhbnNmb3JtLWFydCIsImF1ZCI6InRyYW5zZm9ybS1hcnQiLCJhdXRoX3RpbWUiOjE2NTA2NjE3NjgsInVzZXJfaWQiOiJlT3RYRW10WTJGV0EybWpzZHhnWWRSRzAyamwyIiwic3ViIjoiZU90WEVtdFkyRldBMm1qc2R4Z1lkUkcwMmpsMiIsImlhdCI6MTY1MDY2MTc2OCwiZXhwIjoxNjUwNjY1MzY4LCJlbWFpbCI6ImhlY3Rvcm1hbnVlbGNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhlY3Rvcm1hbnVlbGNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.OxY2JfTLaCXSvCE6P5TXMJD-UweD0LYdlLztCP9x8oGj0UPrAFai7v1BX4217BFExrRlvehB7JYszzckzHaEIbyp0O_J-JeO3emeArvlxxHz30fc3mD67dIINf6uC-rTYPsUAgM5L1ZEV53n-Vpk7IPFxGz8-ukb1tl95CQDoqWShtgdP4NyBm6v6V8yEnzNoeWQj1y1qK9CQ7HQ6F9xXo6GSffiu6IPDnFja1nu-qkk-euenfqS_tAAEzM2eku9DR_j1InqxZsLJ7r9qCQbURwXOSTK6-i2NUmlfvoXVv5f7X7GZd2Svz6kRQJavMAvdRyqmkhticIIFSjsrWFxNQ";

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
