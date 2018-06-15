const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const devConfig = {
  devtool: 'eval-source-map',
  entry: {
    main: './examples/js/index.js'
  },
  output: {
    filename: './dist/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /(src|examples)/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html'
    })
  ],
  resolve: {
    alias: {
      'react-16-dropdown': path.resolve(__dirname, 'src/Dropdown'),
    }
  }
};

const buildConfig = {
  entry: {
    main: './src/Dropdown.js'
  },
  output: {
    filename: './dist/react-16-dropdown.js',
    library: 'react16Dropdown',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: [
    'react',
    'react-dom'
  ]
}

module.exports = TARGET === 'build' ? buildConfig : devConfig;