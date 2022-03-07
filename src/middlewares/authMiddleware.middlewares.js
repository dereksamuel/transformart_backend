// const { jwtDecoder } = require("../utils/decoderJWT");
const { firebaseAdmin } = require("../utils/firebase");

async function authMiddleware(req, res, finalResponse) {
  let headerToken = req.headers.headertoken;

  if (!headerToken) {
    console.error("Not token provided");
    return finalResponse;
  }

  // headerToken = jwtDecoder(false, headerToken, () => {});

  try {
    await firebaseAdmin
      .auth()
      .verifyIdToken(headerToken);
    return finalResponse;
  } catch (error) {
    console.error("Not authorized", error);
  }
}

module.exports = {
  authMiddleware
};
