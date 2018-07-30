const {config} = require('./build.config');
const merge = require('webpack-merge');

const buildConfig = merge(config, {
    mode: 'production'   //生产模式
});

module.exports = {
    buildConfig
};