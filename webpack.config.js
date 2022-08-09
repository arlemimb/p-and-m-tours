const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');

// const multi = require('multi-loader');

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      /* {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, */
      /* {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      }, */
      /* {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'file-loader',
        },
      }, */
      /* {
        test: /\.(png|jpg|gif)$/i,
        dependency: { not: ['url'] },
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      }, */
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf|ico)$/i,
        type: 'asset/resource',
      },
      /* {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }, */
      /* {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      }, */
      /* {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name].[hash:8].[ext]',
          },
        },
      }, */
      /* {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              publicPath: 'images/',
            },
          },
        ],
      }, 
      /*{
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
      '.ico',
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
