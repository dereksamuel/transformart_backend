module.exports = (models) => ({
	async getProducts() {
		const products = await models.Product.findAll();
		return products;
	},

	async getProduct(root, { productId }) {
		const product = await models.Product.findByPk(productId);

		if (!product) {
			console.error("Product not found");
			return ["Hola"];
		}

		return product;
	}
});
