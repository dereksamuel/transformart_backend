function verifyPath() {
	if (process.argv.find((arg) => arg === "--env_dev")) {
		return "./.env.development";
	} else {
		return "./.env";
	}
}

module.exports = {
	verifyPath
};
