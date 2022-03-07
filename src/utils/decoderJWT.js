const jwt = require("jsonwebtoken");

function jwtDecoder(decode, tokenOrInfo, cb) {
  if (decode) {
    jwt.verify(tokenOrInfo, process.env.KEYJWT, cb);
  } else {
    jwt.sign(tokenOrInfo, process.env.KEYJWT, cb);
  }
}

module.exports = {
  jwtDecoder
};
