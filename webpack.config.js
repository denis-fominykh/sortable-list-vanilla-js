const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const PrettierPlugin = require("prettier-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: ['./src/index.js', './src/scss/style.scss'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/style.css'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/html/index.html",
      inject: 'body'
    }),
    // new PrettierPlugin({
    //   printWidth: 80,               // Specify the length of line that the printer will wrap on.
    //   tabWidth: 2,                  // Specify the number of spaces per indentation-level.
    //   useTabs: false,               // Indent lines with tabs instead of spaces.
    //   semi: true,                   // Print semicolons at the ends of statements
    //   singleQuote: true,            // Single semicolons
    //   trailingComma: 'all',         // Trailing commas wherever possible (including function arguments)
    //   encoding: 'utf-8',            // Which encoding scheme to use on files
    //   extensions: [ ".js", ".ts" ]  // Which file extensions to process
    // })
  ]
};
