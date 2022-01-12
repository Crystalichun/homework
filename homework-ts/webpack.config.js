const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({}), new UglifyJsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'awesome-typescript-loader?silent=true'],
      },
      {
        test: /\.scss|.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.less'],
  },
  mode: 'development',
  devServer: {
    port: 8081,
    hot: true,
  },
};
