const path = require('path');
const common = require('./webpack.config.common.js');

module.exports = (env, argv) => {
  const { mode } = argv;

  return {
    mode,
    entry: common.entry[mode],
    plugins: common.plugins[mode],
    devtool: mode === 'production' ? false : 'source-map',
    devServer: {
      contentBase: './dist',
      port: 9000,
      disableHostCheck: true,
      host: '0.0.0.0',
      public: 'localhost:9000'
    },
    output: {
      filename: 'react-feature-flipper.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      library: 'ReactFeatureFlipper'
    },
    resolve: {
      extensions: ['.js']
    },
    externals: common.externals[mode],
    module: {
      rules: common.rules
    }
  };
};
