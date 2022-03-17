const dayjs = require("dayjs");
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

      const interval = setInterval(() => {
        console.log(dayjs.unix(decodedToken.exp).format("DD/MM/YYYY HH-mm-ss"), dayjs().format("DD/MM/YYYY HH-mm-ss"));
        if (dayjs.unix(decodedToken.exp).format("DD/MM/YYYY HH-mm-ss") <= dayjs().format("DD/MM/YYYY HH-mm-ss")) {
          global.decodedToken = null;
          clearInterval(interval);
        }
      }, 1000);

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
