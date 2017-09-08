const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DEV',
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
  ]
})