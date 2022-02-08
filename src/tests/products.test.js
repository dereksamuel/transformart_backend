/* eslint-disable no-undef */
const { app } = require("../");
const request = require("supertest");

let products = [];

describe("GET /api/v1/products", () => {
  test("should respond with a 200 status code and content type equals to array", async () => {
    products = await request(app)
      .get("/api/v1/products")
      .expect("Content-Type", /json/)
      .expect(200);
    products = products.body;

    expect(Array.isArray(products)).not.toBeFalsy();
  });

  test("should respond with a 200 status code and content type equals to array", async () => {
    products = await request(app)
      .get("/api/v1/products")
      .expect("Content-Type", /json/)
      .expect(200);
    products = products.body;

    expect(Array.isArray(products)).not.toBeFalsy();
  });

  test("should respond with the filter that we do(searchBy name)", async () => {
    products = await request(app)
      .get("/api/v1/products")
      .query({
        searchBy: "name"
      }) // FIXME: In the future do this queries for the search page
      .expect("Content-Type", /json/)
      .expect(200);
    products = products.body;
  });
});

describe("GET /api/v1/products/:productId", () => {
  describe("when the product was found", () => {
    test("should respond with a 200 status code and content type equals to an object", async () => {
      product = await request(app)
        .get("/api/v1/products/" + products[0].id)
        .expect("Content-Type", /json/)
        .expect(200);
      product = product.body;
    });

    test("must contain the name, price, description, categoriesIds and srcImage", () => {
      expect(product.name).toBeDefined();
      expect(product.price).toBeDefined();
      expect(product.description).toBeDefined();
      expect(product.categoriesIds).toBeDefined();
      expect(product.srcImage).toBeDefined();
    });

    test("categoriesIds must have one or more elements", () => {
      expect(product.categoriesIds.length).not.toEqual(0);
    });

    test("categoriesIds must exists in categories", () => {
      const categories = [{ id: "a1212s5-12445a8-78s7-dsd-s57878", }];
      let verification;
      
      for (const category of categories) {
        verification = product.categoriesIds.find((categoryId) => categoryId === category.id);
      }

      expect(verification).toBeTruthy();
    });
  });

  describe("when the product was not found", () => {
    let notFoundResponse;

    test("should respond with a status 404", async () => {
      notFoundResponse = await request(app)
        .get("/api/v1/products/anySomethingFailedId")
        .expect("Content-Type", /json/)
        .expect(404);
      notFoundResponse = notFoundResponse.body;
    });

    test("should contain a message and status var", () => {
      expect(notFoundResponse.message).not.toBeFalsy();
      expect(notFoundResponse.status).not.toBeFalsy();
    });
  });
});
