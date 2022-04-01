const { firebaseAdmin } = require("../../utils/firebase");

module.exports = () => ({
  async logout() {
    const uid = "eOtXEmtY2FWA2mjsdxgYdRG02jl2";

    await firebaseAdmin.auth().revokeRefreshTokens(uid);
    global.decodedToken = null;
  },

  verifyIsAuth() {
    return Boolean(global.decodedToken);
  }
});
