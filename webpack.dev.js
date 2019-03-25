const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const compiler = require('vue-template-compiler')
const webpack = require("webpack");
const path = require('path');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    "bundle": "./assets/bundleSrc.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "js/[name].js",
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  watch: true,
  module: {
    rules: [
      {
          test: require.resolve('jquery'),
          use: [{
             loader: 'expose-loader',
             options: 'jQuery'
         },{
             loader: 'expose-loader',
             options: '$'
         }]
      },  
      // {
      //     test: require.resolve('Vue'),
      //     use: [{
      //        loader: 'expose-loader',
      //        options: 'Vue'
      //    }]
      // },

      // {
      //   test: /\.(s*)css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'sass-loader',
      //   ],
      // },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.(s*)css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '/css/master.css'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://settler.test/' // Add website dev url here
    })
  ],
}
