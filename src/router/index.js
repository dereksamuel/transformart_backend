const express = require("express");
const { productsRouter } = require("./product.router.js");

function routerApi(app) {
	const router = express.Router();

	router.use("/products", productsRouter);

	app.use("/api/v1", router);
}

module.exports = {
	routerApi
};
