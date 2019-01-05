const { DefinePlugin } = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonPlugins = [
  new DefinePlugin({ __WEBPACK__: JSON.stringify(true) })
];

module.exports = {
  entry: {
    development: './examples/FeatureFlipper/index.js',
    production: './src/FeatureFlipper.js'
  },
  plugins: {
    development: commonPlugins.concat([
      new HtmlWebpackPlugin({
        title: 'FeatureFlipper Test',
        template: 'examples/FeatureFlipper/index.html'
      })
    ]),
    production: commonPlugins.concat([
      new CleanWebpackPlugin(['dist'])
    ])
  },
  externals: {
    development: [],
    production: {
      react: {
        root: 'React',
        commonjs: 'react',
        commonjs2: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs: 'react-dom',
        commonjs2: 'react-dom'
      }
    }
  },
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        'eslint-loader'
      ]
    }
  ]
};
