const express = require("express");
const { ProductService } = require("../services/product.service");
const productsRouter = express.Router();

const productsInstance = new ProductService();

productsRouter.get("/", async (req, res) => {
	const products = await productsInstance.getAll({});

	res.status(200).json(products);
});

productsRouter.get("/:productId", async (req, res) => {
	const { productId } = req.params;
	const product = await productsInstance.getOne({ id: productId });

	res.status(200).json(product);
});

productsRouter.post("/", async (req, res) => {
	const product = await productsInstance.create(req.body);
	res.status(201).json(product);
});

productsRouter.patch("/:productId", async (req, res) => {
	const { productId } = req.params;

	const product = await productsInstance.update({
		id: productId,
		data: req.body
	});

	res.status(200).json(product);
});

productsRouter.delete("/:productId", async (req, res) => {
	const { productId } = req.params;

	const { id } = await productsInstance.delete(productId);

	res.status(200).json(id);
});

module.exports = {
	productsRouter
};
