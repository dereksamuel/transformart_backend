const { authMiddleware } = require("../../middlewares/authMiddleware.middlewares");

module.exports = () => ({
  async authenticate(root, data) {
    const isAuthenticate = await authMiddleware(data.headerToken);

    if (isAuthenticate.isError) {
      throw new Error(isAuthenticate.message);
    }

    return "Authenticated";
  }
});
