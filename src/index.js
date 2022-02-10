require("dotenv").config();
const express = require("express");
const { routerApi } = require("./router/");

// intializations
const app = express();
routerApi(app);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log("Listening on port", PORT);
});
