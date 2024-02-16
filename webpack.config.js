const path = require('path')
const { merge } = require('webpack-merge')

const commonConfig = require(path.join(__dirname, 'webpack.common.config'));

const productionConfig = require(path.join(__dirname, 'webpack.production.config'));

const developmentConfig = require(path.join(__dirname, 'webpack.development.config'));

module.exports = (env, args) => {
  switch(args.mode) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
}