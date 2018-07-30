const path = require('path');

const entry = path.resolve(__dirname, '../web/app.js');
const htmlTemplate = path.resolve(__dirname, '../web/index.html');
const outputPath = path.resolve(__dirname, '../web/dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');    //a plugins for html 
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
    entry: entry,
    output: {
      filename: 'main.js',
      path: outputPath
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: htmlTemplate,
        hash: true 
      }),
      new VueLoaderPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    },
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.js'
      }
    }  
  };

module.exports = {
    config
};