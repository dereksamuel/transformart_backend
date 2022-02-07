const express = require("express");
const router = express.Router();

const mockupArray = [
  {
    id: "as5a878s7dsds5",
    price: 2.3,
    name: "My product 1 PNG",
    description: "Hello my product",
    srcImage: "https://platzi.com/png.png",
    srcVideo: "https://platzi.com/png.mp4",
    categoriesIds: [
      "a1212s5-12445a8-78s7-dsd-s57878"
    ]
  }
]; // FIXME: Later in a service folder

router.get("/", (req, res) => {
  res.status(200).json(mockupArray);
});

router.get("/:productId", (req, res) => {
  const { productId } = req.params;

  const product = mockupArray.find((prod) => prod.id === productId);

  if (!product) {
    res.status(404).json({
      status: "Not found",
      message: "Product Not found",
    });
  } else {
    res.status(200).json(product);
  }
});

module.exports = {
  router
};
