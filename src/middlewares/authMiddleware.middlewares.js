const { firebaseAdmin } = require("../utils/firebase");

async function authMiddleware(headerToken) {
  if (!process.argv.find((arg) => arg === "--mode-test")) {
    if (!headerToken) {
      return {
        isError: true,
        message: "Token not provided"
      };
    }

    if (global.decodedToken) {
      return global.decodedToken;
    }

    return firebaseAdmin
      .auth()
      .verifyIdToken(headerToken);
  } else return {};
}

module.exports = {
  authMiddleware
};
