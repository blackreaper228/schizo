const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    static: {
      directory: path.join(__dirname, 'dev_build'),
      watch: true
    },
    port: 8080,
    open: ['/test.html'],
    hot: true,
    liveReload: true,
    watchFiles: ['src/**/*'],
    compress: true,
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, 'dev_build'),
    publicPath: '/',
    // Убираем хеши в dev режиме
    filename: '[name].js',
    assetModuleFilename: '[name][ext]'
  }
})
