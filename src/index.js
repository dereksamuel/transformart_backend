
const { verifyPath } = require("./utils/verifyPath");
require("dotenv").config({
	path: verifyPath(),
});

const express = require("express");
const { routerApi } = require("./router/");

// intializations
const app = express();

// middlewares
app.use(express.json());

const PORT = process.env.PORT;
routerApi(app);

app.listen(PORT, () => {
	console.log("Listening on port", PORT);
});
