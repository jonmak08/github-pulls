/* eslint strict: 0, no-console: 0 */
'use strict';

const express = require('express');
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config.development');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(config);

const PORT = 3000;

const wdm = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
});

app.use(wdm);
app.use(webpackHotMiddleware(compiler));

const server = app.listen(PORT, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('Stopping dev server');
  wdm.close();
  server.close(() => {
    process.exit(0);
  });
});