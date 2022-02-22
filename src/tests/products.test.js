/* eslint-disable no-undef */
const productMutations = require("../resolvers/mutations/product.mutations");
const productQueries = require("../resolvers/queries/product.queries");

const MODELS = process.models;

describe("-- Product Queries --", () => {
  let mutations = null;
  let queries = null;

  beforeAll(() => {
    queries = productQueries(MODELS);
    mutations = productMutations(MODELS);
  });

  test("getProducts", async () => {
    const products = JSON.parse(JSON.stringify(await queries.getProducts()));
    
    expect(products).not.toBe(undefined);
    expect(products.length).not.toBe(0);

    console.log(mutations);
  });
});
