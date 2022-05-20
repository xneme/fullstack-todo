const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = () => {

  return {
    mode: isDevelopment ? 'development' : 'production',
    output: {
      publicPath: '/'
    },
    entry: [
      './src/client'
    ],
    module: {
      rules: [
        {
          // Load JS files
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
            }
          }
        },
        {
          // Load CSS files
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          // Load other files
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
          use: ['file-loader']
        }
      ]
    },
    plugins: [
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'TODO app',
        template: path.resolve(__dirname, 'src/client/assets/index.html'),
        favicon: path.resolve(__dirname, 'src/client/assets/favicon.ico'),
        inject: 'body'
      }),
      // Extract css
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name]-[id].css'
      })
    ].filter(Boolean)
  }
}
