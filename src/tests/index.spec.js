/* eslint-disable no-undef */
const request = require("supertest");
const { app } = require("../");

describe("GET /products", () => {
	test("should respond with a 200 status code and content type equals to json", async () => {
		const response = await request(app)
			.get("/products")
			.expect(200)
			.expect("Content-Type", /json/);		
	});

	test("");
});
