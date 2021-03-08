/*
   Setting webpack for Base.
*/

import webpack from 'webpack'
import path from 'path'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsChecker from 'fork-ts-checker-webpack-plugin'
import WebpackBuildNotifierPlugin from 'webpack-build-notifier'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const ecmaFileNames = process.argv.includes('production') ? '[name].min.js?[fullhash]' : '[name].js?[fullhash]'
// Setting.
module.exports = {
  // New!! Necessary for HMR.
  target: 'web',
  // Entry Point.
  entry: {
    core: path.resolve(__dirname, '../resource/Core.tsx')
  },
  // Output Point.
  output: {
    path: path.resolve(__dirname, '../delivery'),
    filename: path.join('js', ecmaFileNames),
    assetModuleFilename: 'materials/images/[hash][ext][query]',
    publicPath: process.env.npm_package_config_path_prefix || '/'
  },
  // Spilt Chunks.
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          test: /node_modules\/(?!(react|react-dom|react-router|react-router-dom)\/).*/,
          name: 'common.modules.bundle',
          enforce: true,
          chunks(chunk) {
            return chunk.name
          }
        },
        react: {
          test: /node_modules\/react|react-dom|react-router|react-router-dom\//,
          name: 'react.modules.bundle',
          enforce: true,
          chunks(chunk) {
            return chunk.name
          }
        }
      }
    }
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
        use: [
          'cache-loader',
          // 'thread-loader',
          {
            loader: 'babel-loader?cacheDirectory',
            options: {
              plugins: [require.resolve('react-refresh/babel')]
            }
          }
        ]
      },
      // TS & TSX.
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          // 'thread-loader',
          'babel-loader?cacheDirectory',
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true
            }
          }
        ]
      },
      // Styled Components.
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          // 'thread-loader',
          {
            loader: 'stylelint-custom-processor-loader',
            options: {
              emitWarning: true
            }
          }
        ]
      },
      // For Images.
      {
        test: /\.(webp|jpg|png|gif|svg)$/,
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
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.webp', '.svg', '.jpg', '.png', '.gif'],

    alias: {
      '@': path.resolve(__dirname, '../resource/'),
      '~': path.resolve(__dirname, '../')
    }
  },

  plugins: [
    // New!!
    new ReactRefreshWebpackPlugin(),
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
      templateContent: `<html lang="ja"><body><div id="app"></div></body></html>`
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
