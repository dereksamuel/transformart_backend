const { development_URI, production_URI } = require("../utils/keys");

module.exports = {
  development: {
    url: development_URI,
    dialect: "sqlite",
  },
  production: {
    url: production_URI,
    dialect: "mysql",
  },
};
