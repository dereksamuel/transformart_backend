const { firebaseAdmin } = require("../utils/firebase");

async function authMiddleware(req) {
  if (!process.argv.find((arg) => arg === "--mode-test")) {
    let headerToken = req.headers.headertoken;
    if (!headerToken) {
      return {
        isError: true,
        message: "Token not provided"
      };
    }

    try {
      const decodedToken = await firebaseAdmin
        .auth()
        .verifyIdToken(headerToken);

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
