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

    try {
      const decodedToken = await firebaseAdmin
        .auth()
        .verifyIdToken(headerToken);
      global.decodedToken = decodedToken;

      return decodedToken;
    } catch (error) {
      console.error("Not authorized", error);
      return {
        isError: true,
        message: "Unauthorized"
      };
    }
  } else return {};
}

module.exports = {
  authMiddleware
};
