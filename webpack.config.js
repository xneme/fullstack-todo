const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = (env, argv) => {
  const { mode } = argv

  const additionalPlugins =
    mode === 'production'
      ? [] // Make JS smaller
      : [new webpack.HotModuleReplacementPlugin()] // Enable hot module replacement

  const additionalEntries =
    mode === 'production'
      ? []
      : ['webpack-hot-middleware/client?http://localhost:8000']

  return {
    mode,
    output: {
      publicPath: '/'
    },
    entry: [
      './src/client',
      ...additionalEntries
    ],
    module: {
      rules: [
        {
          // Load JS files
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
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
      // Skip the part where we would make a html template
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
      }),
      ...additionalPlugins
    ]
  }
}
