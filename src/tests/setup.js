/* eslint-disable no-undef */
process.argv.push("--env_dev");
process.argv.push("--mode-test");

const { verifyPath } = require("../utils/verifyPath");
require("dotenv").config({
  path: verifyPath(),
});
const { sequelize: { models } } = require("../utils/sequelize");

module.exports = async () => {
  process.models = models;
  return;
};
