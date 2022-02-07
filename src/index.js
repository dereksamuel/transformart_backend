require("dotenv").config();
const express = require("express");
const { routerApi } = require("./router");

// Initializations
const app = express();
const PORT = process.env.PORT;
routerApi(app);

// Setters

// listener on port
if (process.env.ENVIRONMENT !== "TEST") {
  app.listen(PORT, () => {
    console.log("Listening on port", PORT);
  });
} else {
  module.exports = {
    app
  };
}
