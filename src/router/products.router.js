const express = require("express");
const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
	res.json({
		hello: "World"
	});
});

module.exports = {
	productsRouter
};
