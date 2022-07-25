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

global.decodedToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2NzNkM2M5NDdhZWIxOGI2NGU1OGUzZWRlMzI1NWZiZjU3NTI4NWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdHJhbnNmb3JtLWFydCIsImF1ZCI6InRyYW5zZm9ybS1hcnQiLCJhdXRoX3RpbWUiOjE2NTA2NjE3NjgsInVzZXJfaWQiOiJlT3RYRW10WTJGV0EybWpzZHhnWWRSRzAyamwyIiwic3ViIjoiZU90WEVtdFkyRldBMm1qc2R4Z1lkUkcwMmpsMiIsImlhdCI6MTY1MDY2MTc2OCwiZXhwIjoxNjUwNjY1MzY4LCJlbWFpbCI6ImhlY3Rvcm1hbnVlbGNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhlY3Rvcm1hbnVlbGNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.OxY2JfTLaCXSvCE6P5TXMJD-UweD0LYdlLztCP9x8oGj0UPrAFai7v1BX4217BFExrRlvehB7JYszzckzHaEIbyp0O_J-JeO3emeArvlxxHz30fc3mD67dIINf6uC-rTYPsUAgM5L1ZEV53n-Vpk7IPFxGz8-ukb1tl95CQDoqWShtgdP4NyBm6v6V8yEnzNoeWQj1y1qK9CQ7HQ6F9xXo6GSffiu6IPDnFja1nu-qkk-euenfqS_tAAEzM2eku9DR_j1InqxZsLJ7r9qCQbURwXOSTK6-i2NUmlfvoXVv5f7X7GZd2Svz6kRQJavMAvdRyqmkhticIIFSjsrWFxNQ";

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
