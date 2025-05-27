const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    static: {
      directory: path.join(__dirname, 'dev_build')
    },
    port: 8080,
    open: ['/test.html']
  },
  output: {
    path: path.resolve(__dirname, 'dev_build')
  }
})
