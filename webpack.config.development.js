/* eslint strict: 0 */
'use strict';

const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const baseConfig = require('./webpack.config.base');

const config = Object.create(baseConfig);

config.debug = true;

config.devtool = 'cheap-module-eval-source-map';

config.entry = [
  'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&reload=true',
  './app/app/index'
];

config.output.publicPath = 'http://localhost:3000/app/dist/';

config.module.loaders.push(
  {
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass']
  },
 {
    test: /\.svg$/,
    loader: 'svg-inline'
  },
 {
    test: /\.gif$/,
    loader: 'url-loader'
  }
);

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': true,
    'process.env.NODE_ENV': JSON.stringify('development')
  })
);

config.target = webpackTargetElectronRenderer(config);

module.exports = config;