require("dotenv").config();
const express = require("express");

// Initializations
const app = express();

// Setters
app.set("port", process.env.PORT);

// listener on port
if (process.env.ENVIRONMENT !== "TEST") {
  app.listen(() => {
    console.log("Listening on port", app.get("port"));
  });
} else {
  module.exports = {
    app
  };
}
