const URI = process.env.URI;

module.exports = {
  development: {
    url: URI,
    dialect: "sqlite",
  },
  production: {
    url: URI,
    dialect: "mysql",
  },
};
