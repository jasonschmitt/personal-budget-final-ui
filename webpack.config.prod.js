const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CopyPlugin = require('copy-webpack-plugin')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_sizes.html',
    }),

    new CopyPlugin({
      patterns: [{ from: 'assets/images', to: 'assets/images' }],
    }),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
})
