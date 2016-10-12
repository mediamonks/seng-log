
const webpack = require("webpack");
const webpackDevServer = require('webpack-dev-server');
const path = require('path');

var baseConfig = require('../config/webpack.config.dist');
var browser = baseConfig();
browser.output.libraryTarget = "var";
browser.output.filename = "./dist/seng-log.js";
browser.output.path = path.join(__dirname, '../dist');
browser.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
browser.devtool = 'source-map';
browser.watch = true;
browser.progress = true;
browser.keepalive = true;

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
