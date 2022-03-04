const { firebaseAdmin } = require("../utils/firebase");

async function authMiddleware(req, res, next) {
  const query = req.body.query;
  const headerToken = req.headers.headertoken;

  if (query?.includes("mutation") && !req.body.operationName) {
    if (!headerToken) {
      return res.json({
        message: "No token provided"
      }).status(401);
    }
  
    try {
      await firebaseAdmin
        .auth()
        .verifyIdToken(headerToken);
      next();
    } catch (error) {
      return res.json({
        message: "Could not authorized you"
      }).status(403);
    }
  } else next();
}

module.exports = {
  authMiddleware
};
