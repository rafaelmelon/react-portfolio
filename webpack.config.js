const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // },
  entry: './src/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Proyecto SUIX',
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('main.css')
  ]
}
