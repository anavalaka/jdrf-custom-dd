const path = require('path');
var webpack = require("webpack");

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'tim-cascade-dropdown.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
        filename: "[file].map",
        sourceRoot: "../"
    })
  ],  
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  }
};
