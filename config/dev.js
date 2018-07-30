const merge = require('webpack-merge');

const {config} = require('./build.config');

const buildConfig = merge(config, {
    mode: 'development'    //开发模式
});

module.exports = {
    buildConfig
};