const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

const plugins = PRODUCTION
  ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin('style-[contenthash:10].css'),
    new HTMLWebpackPlugin({
      template: 'config/index-template.html',
    })
  ]
  : '';

  const sassResources = {
    loader: 'sass-resources-loader',
    options: {
      resources: [path.resolve(__dirname, '../src/styles/foundation/_variables.scss'), path.resolve(__dirname, '../src/styles/foundation/_utils.scss')],
    }
  };

module.exports = {
  entry: './src/index.js',
  plugins,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: PRODUCTION ? '' : '/dist',
    filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
  },
  devtool: PRODUCTION ? 'cheap-module-source-map' : 'eval',
  performance: {
    hints: PRODUCTION ? 'warning' : false,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': PRODUCTION
              ? ExtractTextPlugin.extract({
                use: 'css-loader!sass-loader',
                fallback: 'vue-style-loader'
              })
              : ['vue-style-loader', 'css-loader', 'sass-loader', sassResources]
              ,
            'sass': PRODUCTION
              ? ExtractTextPlugin.extract({
                use: 'css-loader!sass-loader?indentedSyntax',
                fallback: 'vue-style-loader'
              })
              : ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax', sassResources]
          },
          postcss: [require('autoprefixer')()],
        },
      },
      {
        test: /\.(scss|sass)$/,
        loader: PRODUCTION
          ? ExtractTextPlugin.extract({
            use: 'css-loader!sass-loader?indentedSyntax',
            fallback: 'vue-style-loader'
          })
          : 'style-loader!css-loader!sass-loader?indentedSyntax',
        exclude: '/node_modules/'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: '/\.(png|gif|jpg|svg)$/',
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['file-loader?name=/assets/fonts/[name].[ext]'],
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
  },
};
