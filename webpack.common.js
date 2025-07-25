const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    soon: './src/index.js',
    test: './src/javascript/test.js',
    articles: './src/javascript/articles.js',
    flatEarth: './src/javascript/flatEarth.js',
    encryptor: './src/javascript/encryptor.js',
    predictions: './src/javascript/predictions.js',
    about: './src/javascript/about.js',
    iceberg: './src/javascript/iceberg.js',
    empty: './src/javascript/empty.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/', // Добавляем это
    clean: true // Очищает папку docs перед каждой сборкой
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(glb|gltf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'models/[hash][ext][query]'
        }
      },
      {
        test: /\.(hdr)$/i, // ✅ Поддержка HDR
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/soon.html',
      filename: './soon.html',
      chunks: ['soon']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/who.html',
      filename: './who.html',
      chunks: ['empty']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/sickness.html',
      filename: './sickness.html',
      chunks: ['empty']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/servant.html',
      filename: './servant.html',
      chunks: ['empty']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/bruh.html',
      filename: './bruh.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/test.html',
      filename: './test.html',
      chunks: ['test']
    }),

    // articles

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/articlesBitie.html',
      filename: './bitie.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/articlesKosmos.html',
      filename: './kosmos.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/articlesProshloe.html',
      filename: './proshloe.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/articles/bitie/ten-predictions.html',
      filename: './ten-predictions.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/articles/bitie/adrenochrome.html',
      filename: './adrenochrome.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/articles/bitie/antarctica.html',
      filename: './antarctica.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/articles/bitie/vatican.html',
      filename: './vatican.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/articles/kosmos/fake-moon-landing.html',
      filename: './fake-moon-landing.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/articles/kosmos/ufo-on-video.html',
      filename: './ufo-on-video.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/articles/kosmos/water-is-door.html',
      filename: './water-is-door.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/articles/proshloe/chernobyl-hiv.html',
      filename: './chernobyl-hiv.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/articles/proshloe/bush-and-children.html',
      filename: './bush-and-children.html',
      chunks: ['articles']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/articles/proshloe/dyatlov-pass.html',
      filename: './dyatlov-pass.html',
      chunks: ['articles']
    }),

    // unique pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/flat-earth.html',
      filename: './flat-earth.html',
      chunks: ['flatEarth']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/encryptor.html',
      filename: './encryptor.html',
      chunks: ['encryptor']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/predictions.html',
      filename: './predictions.html',
      chunks: ['predictions']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/iceberg.html',
      filename: './iceberg.html',
      chunks: ['iceberg']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/about.html',
      filename: './about.html',
      chunks: ['about']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '' },
        { from: 'CNAME', to: 'CNAME' }
      ]
    })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
