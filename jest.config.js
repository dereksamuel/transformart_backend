process.argv.push("--env_dev");
const { app } = require("./src");

module.exports = async () => {
  global.app = app;

  return {
    verbose: true
  };
};
