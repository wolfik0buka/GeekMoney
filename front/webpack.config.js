const path = require('path');
const HTMLplugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry:{
    main: path.resolve(__dirname, 'src', 'index.jsx'),
  }, 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js'
  },
  module:{
    rules :[
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        use:{
          loader:'babel-loader'
        } 
      },
      {
       test: /\.(sa|sc|c)ss$/,
       use: [
         MiniCssExtractPlugin.loader,
         'css-loader',
         'postcss-loader',
         'sass-loader',
       ],
      } 
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias:{
      components: path.resolve(__dirname, 'src', 'Components'),
      containers: path.resolve(__dirname, 'src', 'Containers'),
    }
  },
  plugins :[
    new HTMLplugin({
      template: path.resolve(__dirname, 'src', 'index.html'), 
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  devServer:{
    historyApiFallback: true,
  }
};
