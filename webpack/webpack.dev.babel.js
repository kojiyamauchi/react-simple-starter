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
  watchOptions: {
    // Using When File Update is Not Detected Correctly.
    ignored: /node_modules/,
    poll: true
  },
  plugins: [],
  devtool: 'inline-source-map',
  // For Webpack Dev Sever.
  devServer: {
    // Setting Port.
    port: 3000,
    // SSL.
    https: true,
    // When Using the HTML5 History API, The index.html Page Will Likely Have to be Served in Place of Any 404 Responses. Enable This by Passing.
    historyApiFallback: process.env.npm_package_config_path_prefix ? { index: process.env.npm_package_config_path_prefix } : true,
    // Set Open Page Path & Default Browser.
    open: {
      target: process.env.npm_package_config_path_prefix ? [process.env.npm_package_config_path_prefix.replace('/', '')] : undefined,
      app: {
        name: 'google chrome canary'
      }
    },
    client: {
      // Displayed Progress of Conversion on Terminal.
      progress: true,
      // Created Log Level.
      logging: 'info'
    },
    static: {
      // This API's Necessary When Using 'webpack dev server' on Root of index.html.
      directory: path.resolve(__dirname, '../delivery/')
      // Watching for Static Files in Delivery Dir. ( Styles || Templates || etc... )
      // watch: true,
    },
    devMiddleware: {
      // Setting Root on 'webpack dev server'.
      publicPath: process.env.npm_package_config_path_prefix || '/'
    }
  }
})
