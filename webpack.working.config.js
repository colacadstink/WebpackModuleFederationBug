const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: {
    remote: './src/index.js'
  },
  output: {
    uniqueName: 'BugTest',
    publicPath: 'auto',
    path: path.resolve(__dirname, 'workingDist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'BugTest',
      exposes: ['./src/index.js'],
      filename: 'remoteEntry.js',
      shared: {
        lodash: {
          singleton: true,
          strictVersion: true,
          eager: false,
          requiredVersion: '*',
        }
      }
    }),
  ]
};