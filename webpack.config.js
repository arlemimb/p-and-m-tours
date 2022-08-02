const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');
const multi = require('multi-loader');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g)$/,
        use: ['url-loader'],
      },
      /* {
        test: /\.(jpe?g|png)$/i,
        loader: multi(
          'file-loader?name=[name].[ext].webp!webp-loader?{quality: 95}',
          'file-loader?name=[name].[ext]'
        ),
      }, */
    ],
  },
  resolve: {
    extensions: [
      '*',
      '.js',
      '.jsx',
      '.css',
      '.jpg',
      '.jpeg',
      '.png',
      '.svg',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  // eslint-disable-next-line new-cap
  plugins: [new webpack.HotModuleReplacementPlugin(), new dotenv()],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    hot: true,
  },
};
