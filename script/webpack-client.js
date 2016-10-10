const webpack = require("webpack");
const webpackDevServer = require('webpack-dev-server');

var baseConfig = require('../config/webpack.config.dist');

var browser = baseConfig();
browser.output.libraryTarget = "var";
browser.output.filename = "./dist/seng-log.js";
browser.output.path = path.resolve(__dirname, '../dist');
browser.output.publicPath = '/';
browser.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");

var compiler = webpack(browser);
var server = new webpackDevServer(compiler, {
	contentBase: "example/"
});

server.listen(8080, function (err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + 8080 + '\n')
});
