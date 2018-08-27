const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./build.js');
const compiler = webpack(config);



app.use(webpackDevMiddleware(compiler, {
  publicPath: '/'
}));

app.get('/v2/authority/login', function (req, res) {
  res.send('authority/login');
})

app.use('/swagger', express.static('./swagger-ui/dist'));    //let the swagger api works.

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});