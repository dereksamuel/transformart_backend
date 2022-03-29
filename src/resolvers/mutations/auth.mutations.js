module.exports = () => ({
  async logout() {
    global.decodedToken = null;
  },

  verifyIsAuth() {
    return Boolean(global.decodedToken);
  }
});
