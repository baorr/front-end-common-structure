const env = process.env.NODE_ENV;
const {buildConfig} = require(`./config/${env}`);

module.exports = buildConfig;