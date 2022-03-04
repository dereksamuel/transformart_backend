/* eslint-disable no-undef */
const productMutations = require("../resolvers/mutations/product.mutations");
const productQueries = require("../resolvers/queries/product.queries");

const { JSONparser } = require("../utils/parser");

const MODELS = process.models;
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

  beforeAll(() => {
    queries = productQueries(MODELS);
    mutations = productMutations(MODELS);
  });

  test("getProducts", async () => {
    const products = JSONparser(await queries.getProducts());

    expect(products).not.toBe(undefined);
    expect(products.length).not.toBe(0);
  });

  test("createProduct -- When I am not authorized", async () => {
    const product = JSONparser(await mutations.createProduct(null, productMock));
    // FIXME: Fix me later, with complete authorized protocol with firebase

    expect(product).toBeFalsy();
  });

  test("createProduct -- When I am authorized", async () => {
    const product = JSONparser(await mutations.createProduct(null, productMock));

    expect(product).toBeTruthy();
  });
});
