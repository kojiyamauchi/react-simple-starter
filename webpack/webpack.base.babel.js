/*
   Setting webpack for Base.
*/

import webpack from 'webpack'
import path from 'path'
import ForkTsChecker from 'fork-ts-checker-webpack-plugin'
import WebpackBuildNotifierPlugin from 'webpack-build-notifier'
import HtmlWebpackPlugin from 'html-webpack-plugin'

// Setting.
module.exports = {
  // Entry Point.
  entry: path.resolve(__dirname, '../resource/base/core.tsx'),
  // Output Point.
  output: {
    path: path.resolve(__dirname, '../delivery/'),
    filename: path.join('js', 'core.min.js'),
    assetModuleFilename: 'materials/images/[hash][ext][query]'
    // publicPath: '/' // Setting Root of Top Dir. Unnecessary Maybe...
  },
  module: {
    rules: [
      // ES Lint.
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      // ECMA & React.
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['cache-loader', 'thread-loader', 'babel-loader?cacheDirectory']
      },
      // TS & TSX.
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['cache-loader', 'thread-loader', 'babel-loader?cacheDirectory', { loader: 'ts-loader', options: { happyPackMode: true } }]
      },
      // Styled Components.
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['cache-loader', 'thread-loader', { loader: 'stylelint-custom-processor-loader', options: { emitWarning: true } }]
      },
      // For Images.
      {
        test: /\.(jpg|png|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
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
        use: 'svg-inline-loader'
      },
      // For Icon.
      {
        test: /\.ico$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'materials/icons/[hash][ext][query]'
        }
      },
      // For Fonts.
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'materials/fonts/[hash][ext][query]'
        }
      },
      // For PDF.
      {
        test: /\.pdf$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'materials/pdf/[hash][ext][query]'
        }
      },
      // For JSON (Into Bundle File).
      {
        type: 'javascript/auto',
        test: /\.json$/,
        exclude: /node_modules/,
        use: 'json-loader'
      },
      // Source Map.
      {
        test: /\.js$/,
        enforce: 'pre',
        use: 'source-map-loader'
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
          syntactic: true
        }
      }
    }),
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
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
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
