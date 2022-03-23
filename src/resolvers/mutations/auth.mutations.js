module.exports = () => ({
  async logout() {
    global.decodedToken = null;
  }
});
