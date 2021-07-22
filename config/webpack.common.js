/*
 * @Description:
 * @Author: MRG
 * @Date: 2021-07-07 16:42:11
 * @LastEditors: MRG
 * @LastEditTime: 2021-07-22 10:37:39
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const NodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { DefinePlugin } = require('webpack')

const prod = require('./webpack.prod.js')
const dev = require('./webpack.dev.js')

const { merge } = require('webpack-merge')
const { VueLoaderPlugin } = require('vue-loader')
const resolvePath = require('./resolvePath')
const deps = require('../package.json')

module.exports = env => {
  const isProduction = env.production
  process.env.NODE_ENV = isProduction ? 'production' : 'development'
  const common = {
    target: 'web',
    entry: {
      main: './src/main.js'
    },
    output: {
      path: resolvePath('./dist'),
      publicPath: isProduction ? './' : '/',
      filename: 'js/[name].[contenthash:8].js',
      chunkFilename: 'js/[name].[contenthash:8].chunk.js',
      clean: true
    },
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': resolvePath('./src')
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: `@import "@/styles/settings/var.scss"; @import "@/styles/tools/index.scss";`
              }
            }
          ]
        },
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.(svg|jpe?g|png|gif)$/,
          type: 'asset',
          generator: {
            filename: 'images/[hash][ext][query]'
          }
        },
        {
          test: /\.svg$/i,
          loader: 'svg-sprite-loader',
          include: resolvePath('src/icons')
        },
        {
          test: /\.(ttf|woff2?|otf)$/,
          type: 'asset',
          generator: {
            filename: 'fonts/[hash][ext][query]'
          }
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title: '组件库',
        template: resolvePath('./src/public/index.html')
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css'
      }),
      new NodePolyfillWebpackPlugin(),
      new ModuleFederationPlugin({
        name: 'com2lib',
        // library: { type: 'var', name: 'com2lib' },
        filename: 'remoteEntry.js',
        remotes: {
          center: 'center@http://localhost:6060/remoteEntry.js'
        },
        shared: {
          vue: {
            // eager: true,
            singleton: true,
            requiredVersion: deps.vue
          },
          'element-ui': {
            // eager: true,
            singleton: true,
            requiredVersion: deps['element-ui']
          }
        }
      }),
      new DefinePlugin({
        BASE_URL: JSON.stringify('基础路径')
      })
    ]
  }

  const config = isProduction ? prod : dev
  return merge(config, common)
}
