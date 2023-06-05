const { development_URI, production_URI } = require("../utils/keys");

module.exports = {
  development: {
    url: production_URI,
    dialect: "mysql",
  },
  production: {
    url: production_URI,
    dialect: "mysql",
  },
};
