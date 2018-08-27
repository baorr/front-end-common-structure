const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./build.js');
const compiler = webpack(config);
const invite = require('./app/route')


app.use(webpackDevMiddleware(compiler, {
  publicPath: '/'
}));

app.use('/api/v1/invite/', invite);

app.use('/swagger', express.static('./swagger-ui/dist'));    //let the swagger api works.

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});