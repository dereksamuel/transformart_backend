const express = require("express");
const router = express.Router();
// const { CategoryService } = require("../services/categories.services");

// const categoryInstance = new CategoryService();

const mockupArrayProducts = [
  {
    id: "as5a878s7dsds5",
    price: 2.3,
    name: "My product 1 PNG",
    description: "Hello my product",
    srcImage: "https://platzi.com/png.png",
    srcVideo: "https://platzi.com/png.mp4",
    categories: [
      {
        id: "a1212s5-12445a8-78s7-dsd-ss4d85s78s57878",
        name: "CategoryName"
      },
      {
        id: "as8sd45u-4ghg-ifgdfs-qasdfsfdfsdsa9s8d9a8s-l-s",
        name: "CategoryName3"
      }
    ]
  },
  {
    id: "as5a878s7d5",
    price: 4.3,
    name: "Mi product 2 PNG",
    description: "Hellos my product derek",
    srcImage: "https://platzi.com/png.png",
    srcVideo: "https://platzi.com/png.mp4",
    categories: [
      {
        id: "a1212s5-12445a8-78s7-dsd-ss4d85s78s57878",
        name: "CategoryName"
      },
      {
        id: "as8sd45u-4ghg-ifgdfs-qas",
        name: "CategoryName2"
      }
    ]
  }
]; // FIXME: Later in a service folder

router.get("/", (req, res) => {
  const { inputSearchBy, categoryId } = req.query;

  const attrsByFilter = [
    "name",
    "price",
    "description"
  ];

  let productsFiltered = [];
  let permitedProducts = [];
  let status = false;

  if (categoryId) {
    mockupArrayProducts.map((mockupArrayProduct) => {
      const finalFilter = mockupArrayProduct.categories.filter((category) => {
        return category.id === categoryId;
      });

      if (finalFilter.length) {
        permitedProducts.push(mockupArrayProduct);
      }
    });

    
    status = Boolean(permitedProducts.length);
    productsFiltered = permitedProducts;
  }

  if (inputSearchBy) {
    for (const attrFilter of attrsByFilter) {
      const filteredResult = mockupArrayProducts.filter((mockupArrayProduct) =>
        `${mockupArrayProduct[attrFilter]}`.includes(inputSearchBy)
      );

      productsFiltered.push(...filteredResult);
    }

    status = Boolean(productsFiltered.length);

    res.status(200).json({
      status,
      productsFiltered
    });
  } else {
    if (categoryId) res.status(200).send({
      status,
      productsFiltered
    });
    else res.status(200).json(mockupArrayProducts);
  }
});

router.get("/:productId", (req, res) => {
  const { productId } = req.params;

  const product = mockupArrayProducts.find((prod) => prod.id === productId);

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
