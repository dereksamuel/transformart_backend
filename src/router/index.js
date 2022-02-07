const express = require("express");
const { router: productsRouter } = require("./products.router");

const routerApi = (app) => {
  const versionOne = express.Router();

  versionOne.use("/products", productsRouter);

  app.use("/api/v1", versionOne);
};

module.exports = {
  routerApi
};
