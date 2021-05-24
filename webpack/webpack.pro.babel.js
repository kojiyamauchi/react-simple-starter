/*
   Setting webpack for Production.
*/

import webpack from 'webpack'
import path from 'path'
import { merge } from 'webpack-merge'
import webpackBase from './webpack.base.babel'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

// For Build on GitHub Pages. ( Reload Measures.)
const generateRedirect =
  process.env['GITHUB_ACTIONS'] && process.env['ENDPOINT_REDIRECT']
    ? [
        new HtmlWebpackPlugin({
          filename: '404.html',
          title: '404, Launch Redirect.',
          meta: [{ viewport: 'width=device-width, initial-scale=1' }, { 'http-equiv': 'refresh', content: `0;URL=${process.env['ENDPOINT_REDIRECT']}` }]
        })
      ]
    : []

// For Build on Apache Server. ( Reload Measures.)
const forApache =
  process.env['DEPLOY_TYPE'] === 'ftp'
    ? [
        new CopyWebpackPlugin({
          patterns: [
            {
              from: '.htaccess',
              context: path.resolve(__dirname, '../resource', 'materials', 'htaccess'),
              to: path.resolve(__dirname, '../delivery')
            }
          ]
        })
      ]
    : []

export default merge(webpackBase, {
  plugins: [
    /* Even when it is already sufficiently compressed,
    the code can be analyzed in detail and the parts
    that are likely to be commonly compressed are compressed more positively */
    new webpack.optimize.AggressiveMergingPlugin(),
    ...generateRedirect,
    ...forApache,
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '{site.webmanifest,browserconfig.xml}',
          context: path.resolve(__dirname, '../resource', 'materials', 'favicons'),
          to: path.resolve(__dirname, '../delivery')
        },
        {
          from: '*.{png,ico,svg}',
          context: path.resolve(__dirname, '../resource', 'materials', 'favicons'),
          to: path.resolve(__dirname, '../delivery', 'favicons')
        }
      ]
    })
  ],
  // Advanced Setting for Plugins.
  optimization: {
    // 'optimization.minimize' is true by default in production mode.
    minimizer: [
      // For Terser webpack Plugin.
      new TerserPlugin({
        terserOptions: {
          compress: {
            // Delete console.***(), When Minify of JS File.
            drop_console: true
          }
        }
      })
    ]
  }
})
