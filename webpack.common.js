const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BabelWebpackPlugin = require('babel-minify-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: "css-loader", options: { minimize: true } }, { loader: "sass-loader" }
          ]
        })
      },
      { test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  plugins: [
    //new CleanWebpackPlugin(['dist']),
    new BabelWebpackPlugin(),
    new ExtractTextPlugin('[name].min.css', {
      allChunks: true
    })
  ]
};
