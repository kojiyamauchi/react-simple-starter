/*
   Setting webpack for Base.
*/

import webpack from 'webpack'
import path from 'path'
import ForkTsChecker from 'fork-ts-checker-webpack-plugin'
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin'
import WebpackBuildNotifierPlugin from 'webpack-build-notifier'
import HtmlWebpackPlugin from 'html-webpack-plugin'

// Setting.
module.exports = {
  // Entry Point.
  entry: path.resolve(__dirname, '../resource/base/core.tsx'),
  // Output Point.
  output: {
    path: path.resolve(__dirname, '../delivery/'),
    filename: path.join('js', 'core.min.js')
    // publicPath: '/' // Setting Root of Top Dir. Unnecessary Maybe...
  },
  module: {
    rules: [
      // ES Lint.
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      // ECMA & React.
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'cache-loader' }, { loader: 'thread-loader' }, { loader: 'babel-loader?cacheDirectory' }]
      },
      // TS & TSX.
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'cache-loader' },
          { loader: 'thread-loader' },
          { loader: 'babel-loader?cacheDirectory' },
          { loader: 'ts-loader', options: { happyPackMode: true } }
        ]
      },
      // Styled Components.
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'cache-loader' }, { loader: 'thread-loader' }, { loader: 'stylelint-custom-processor-loader', options: { emitWarning: true } }]
      },
      // For Images.
      {
        test: /\.(jpg|png|gif|svg)$/,
        loaders: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'materials/images'
        }
      },
      // For JSX SVG.
      {
        test: /\.jsx.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [
                  {
                    removeTitle: true,
                    removeDesc: true
                  }
                ],
                floatPrecision: 2
              }
            }
          }
        ]
      },
      // For Inline SVG.
      {
        test: /\.inline.svg$/,
        loader: 'svg-inline-loader'
      },
      // For Icon.
      {
        test: /\.ico$/,
        loaders: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'materials/icons' // Setting Icons File Output Dir.
        }
      },
      // For Fonts.
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loaders: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'materials/fonts' // Setting Fonts File Output Dir.
        }
      },
      // For PDF.
      {
        test: /\.pdf$/,
        loaders: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'materials/pdf' // Setting PDF File Output Dir.
        }
      },
      // For JSON (Into Bundle File).
      {
        type: 'javascript/auto',
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      // Source Map.
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.svg', '.jpg', '.png', '.gif'],

    alias: {
      '@': path.resolve(__dirname, '../resource/apps/'),
      'react-dom': '@hot-loader/react-dom'
    }
  },

  plugins: [
    // using 'happyPackMode' on ts-loader option. (transpileOnly is true)
    // for that, use this plugin.(for type check)
    new ForkTsChecker({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        }
      }
    }),
    // For Faster Build.
    new HardSourceWebpackPlugin(),
    // Notify Desktop When a Compile Error.
    new WebpackBuildNotifierPlugin({ suppressSuccess: 'initial' }),
    // Generate HTML for Endpoint.
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'React Simple Starter.',
      meta: [
        { charset: 'UTF-8' },
        { 'http-equiv': 'content-language', content: 'ja' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { viewport: 'width=device-width, initial-scale=1' }
      ],
      templateContent: ({ htmlWebpackPlugin }) => `<html lang="ja"><title>${htmlWebpackPlugin.options.title}</title><body><div id="app"></div></body></html>`
    })
  ],
  // Setting for Warning on Terminal.
  performance: {
    /* An entrypoint represents all assets that would be utilized during initial load time for a specific entry.
    This option controls when webpack should emit performance hints based on the maximum entrypoint size.
    The default value is 250000 (bytes). */
    maxEntrypointSize: 400000,

    /* An asset is any emitted file from webpack.
    This option controls when webpack emits a performance hint based on individual asset size.
    The default value is 250000 (bytes). */
    maxAssetSize: 400000
  }
}
