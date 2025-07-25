const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/docs'), // Собираем в dist/docs
    publicPath: '/',
    clean: true
  }
})
