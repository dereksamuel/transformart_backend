
const { verifyPath } = require("./utils/verifyPath");
require("dotenv").config({
	path: verifyPath(),
});

const express = require("express");
const cors = require("cors");
const { routerApi } = require("./router/");

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

// middlewares
app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT;
routerApi(app);

app.listen(PORT, () => {
	console.log("Listening on port", PORT);
});
