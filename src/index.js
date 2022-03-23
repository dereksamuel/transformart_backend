
const { verifyPath } = require("./utils/verifyPath");
require("dotenv").config({
  path: verifyPath(),
});

const dayjs = require("dayjs");
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { fileImport } = require("./utils/fileImport");
const resolvers = require("./resolvers");
// const { auth } = require("firebase-admin");
const { authMiddleware } = require("./middlewares/authMiddleware.middlewares");
const { firebaseAdmin } = require("./utils/firebase");

// intializations
const app = express();
const whiteList = [
  "https://compassionate-edison-e8c580.netlify.app",
  "http://localhost:4001",
  "http://localhost:4000",
  "http://localhost:3000"
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.find((whiteItem) => whiteItem === origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/v1/gql", async (req, res, next) => {
  const authToken = req.headers.authorization;
  const uid = "eOtXEmtY2FWA2mjsdxgYdRG02jl2";

  if (authToken && !global.decodedToken) {
    global.decodedToken = await authMiddleware(authToken.split(" ")[1]);
  }

  if (global.decodedToken) {
    if (dayjs.unix(global.decodedToken.exp).valueOf() <= dayjs().valueOf()) {
      await firebaseAdmin.auth().revokeRefreshTokens(uid);
      global.decodedToken = null;
    }
  }

  next();
}, graphqlHTTP((req) => {
  process.req = req;

  return {
    schema: makeExecutableSchema({
      typeDefs: fileImport("../squemas/index.graphql"),
      resolvers
    }),
    rootValue: resolvers,
    graphiql: true
  };
}));

const PORT = process.env.PORT;

if (process.argv.find((arg) => arg !== "--mode-test")) { // if we be in prod mode
  app.listen(PORT, () => {
    console.log("Listening on port", PORT);
  });
}

module.exports = {
  app
};
