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
      // Добавляем отслеживание изменений в статических файлах
      watch: true
    },
    port: 8080,
    open: ['/test.html'],
    hot: true, // Включаем Hot Module Replacement
    liveReload: true, // Включаем Live Reload для HTML
    watchFiles: {
      paths: ['src/**/*'], // Следим за всеми файлами в src
      options: {
        usePolling: false, // Используем системные события файлов
        interval: 100 // Интервал проверки изменений
      }
    },
    compress: true,
    historyApiFallback: true,
    // Добавляем middleware для обработки HTML изменений
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }

      // Middleware для автоматической перезагрузки при изменении HTML
      devServer.app.get('*', (req, res, next) => {
        // Если запрашивается HTML файл, добавляем заголовки для live reload
        if (req.path.endsWith('.html')) {
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
          res.setHeader('Pragma', 'no-cache')
          res.setHeader('Expires', '0')
        }
        next()
      })

      return middlewares
    }
  },
  output: {
    path: path.resolve(__dirname, 'dev_build'),
    // Добавляем publicPath для правильной работы HMR
    publicPath: '/'
  }
})
