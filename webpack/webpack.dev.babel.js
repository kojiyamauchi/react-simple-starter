/*
   Setting webpack for Development.
*/

import webpack from 'webpack'
import path from 'path'
import { merge } from 'webpack-merge'
import webpackBase from './webpack.base.babel'

export default merge(webpackBase, {
  /*
    Persistent Caching.
    See -> https://webpack.js.org/configuration/other-options/#cache
    See -> https://blog.hiroppy.me/entry/webpack-persistent-caching
  */
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  plugins: [],
  devtool: 'inline-source-map',
  // For Webpack Dev Sever.
  devServer: {
    // Setting Port.
    port: 3000,
    // SSL.
    https: true,
    // This API's Necessary When Using 'webpack dev server' on Root of index.html.
    contentBase: path.resolve(__dirname, '../delivery/'),
    // Setting Root on 'webpack dev server'.
    publicPath: process.env.npm_package_config_path_prefix || '/',
    // Default Browser.
    open: 'google chrome canary',
    // Set Open Page Path.
    openPage: process.env.npm_package_config_path_prefix ? process.env.npm_package_config_path_prefix.replace('/', '') : undefined,
    // When Using the HTML5 History API, The index.html Page Will Likely Have to be Served in Place of Any 404 Responses. Enable This by Passing.
    historyApiFallback: process.env.npm_package_config_path_prefix ? { index: process.env.npm_package_config_path_prefix } : true,
    // Displayed Progress of Conversion on Terminal.
    progress: true,
    // Created Log Level.
    clientLogLevel: 'info',
    // Watching for Static Files in Delivery Dir. ( Styles || Templates || etc... )
    // watchContentBase: true,
    watchOptions: {
      // Using When File Update is Not Detected Correctly.
      poll: true
    }
  }
})
