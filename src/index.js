
const { verifyPath } = require("./utils/verifyPath");
require("dotenv").config({
  path: verifyPath(),
});

const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { fileImport } = require("./utils/fileImport");
const { authMiddleware } = require("./middlewares/authMiddleware.middlewares");
const resolvers = require("./resolvers");

// intializations
const app = express();
const whiteList = [
  "http://localhost:4001",
  "http://localhost:4000"
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

const schema = makeExecutableSchema({
  typeDefs: fileImport("../squemas/index.graphql"),
  resolvers
});

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/v1/gql", authMiddleware, graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
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
