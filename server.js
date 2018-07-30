const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./build.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/'
}));

app.listen(3300, function () {
  console.log('Example app listening on port 3300!\n');
});