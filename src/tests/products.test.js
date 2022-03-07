/* eslint-disable no-undef */
const productMutations = require("../resolvers/mutations/product.mutations");
const productQueries = require("../resolvers/queries/product.queries");

const { JSONparser } = require("../utils/parser");

const productMock = {
  name: "Tester product",
  price: 450000,
  offer: 0,
  description: "My tester product",
  srcImage: "https://i.ytimg.com/vi/cH_yrEmJabE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD-MLk7JWqqHtCiEejLIWCLrgkspw",
  srcVideo: "https://youtu.be/WCi2DLYE82A",
  facebookLink: "https://i.ytimg.com/vi/cH_yrEmJabE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD-MLk7JWqqHtCiEejLIWCLrgkspw",
  instagramLink: "https://i.ytimg.com/vi/cH_yrEmJabE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD-MLk7JWqqHtCiEejLIWCLrgkspw",
  tweeterLink: "https://i.ytimg.com/vi/cH_yrEmJabE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD-MLk7JWqqHtCiEejLIWCLrgkspw",
};

describe("-- Product Queries --", () => {
  let mutations = null;
  let queries = null;

  let products = [];
  let product = null;
  let productCreated = null;

  beforeAll(() => {
    queries = productQueries({ models: process.models });
    mutations = productMutations({ models: process.models });
  });

  test("getProducts", async () => {
    products = JSONparser(await queries.getProducts());

    expect(products).not.toBe(undefined);
    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).not.toBe(0);
  });

  test("getProduct", async () => {
    product = JSONparser(await queries.getProduct(null, { productId: `${products[0].id}` }));

    expect(product).not.toBe(undefined);
    expect(Array.isArray(product)).toBeFalsy();
    expect(product.length).not.toBe(0);
  });

  test("createProduct", async () => {
    productCreated = JSONparser(await mutations.createProduct(null, productMock));

    expect(productCreated).not.toBe(undefined);
    expect(Array.isArray(productCreated)).toBeFalsy();
    expect(Object.keys(productCreated).length).not.toBe(0);
  });

  test("updateProduct", async () => {
    productCreated = JSONparser(await mutations.updateProduct({
      Query: queries
    }, {
      id: productCreated.id,
      ...productMock
    }));

    expect(productCreated).not.toBe(undefined);
    expect(Array.isArray(productCreated)).toBeFalsy();
    expect(Object.keys(productCreated).length).not.toBe(0);
  });

  test("deleteProduct", async () => {
    const productDeleted = JSONparser(await mutations.deleteProduct({
      Query: queries
    }, { id: productCreated.id }));

    expect(productDeleted).toBeTruthy();
  });
});
