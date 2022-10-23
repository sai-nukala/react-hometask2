const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// eslint-disable-next-line import/no-dynamic-require, global-require
const envConfig = (env) => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: 'production' }) => {
  console.log(`mode is: ${mode}`);

  return merge(
    {
      mode,
      entry: './src/index.js',
      devServer: {
        hot: true,
        open: true,
      },
      output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './dist/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
      ],
    },
    envConfig(mode),
  );
};
