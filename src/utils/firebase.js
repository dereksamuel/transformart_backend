const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("./firebaseSDK.json");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount)
});

module.exports = {
  firebaseAdmin
};
