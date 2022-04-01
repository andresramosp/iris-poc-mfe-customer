const { defineConfig } = require('@vue/cli-service');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_REMOTES === 'local' ?
   // DEVELOPMENT
    'http://localhost:9999/' :
    // PRODUCTION
    'https://iris-poc-mfe-customer.herokuapp.com/',
  devServer: { port: 9999 },
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    output: {
      uniqueName: 'mfeone',
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'MfeOne',
        filename: 'remoteEntry.js',
        remotes: process.env.VUE_APP_REMOTES === 'local' ?
          // DEVELOPMENT
          {
            Shell: 'Shell@http://localhost:8080/remoteEntry.js'
          } :
          // PRODUCTION
          {
            Shell: 'Shell@https://iris-poc-mfe-shell.herokuapp.com/'
          },
        exposes: {
          './MfeOne': './src/bootstrap.ts',
          './SharedComponent': './src/components/SharedComponent',
        },
        shared: {
          ...require('./package.json').dependencies,
          vue: {
            singleton: true,
          }
        },
      })
    ]
  }
})