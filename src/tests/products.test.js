/* eslint-disable no-undef */

const request = require("supertest");

describe("-- Queries --", () => {
  test("getProducts", () => {
    const response = request("/api/v1/gql");
    console.log(response.body);
  });
});
