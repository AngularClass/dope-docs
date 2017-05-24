import * as webpack from 'webpack'
import * as WebpackDevServer from 'webpack-dev-server'
import * as path from 'path'
import { UIGuideBuildConfig, DevServerConfig } from '../interfaces'
import { Configuration } from 'webpack'
const HTMLPlugin =  require('html-webpack-plugin')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const chalk = require('chalk')

export function startServer(config: UIGuideBuildConfig) {
  const webpackConfig = config.webpackConfig
  const serverConfig: DevServerConfig = webpackConfig.devServer
  
  let host = config.host || 'localhost'
  let port = config.port || 4000

  if (serverConfig) {
    host = serverConfig.host || host
    port = serverConfig.port || port
  }

  webpackConfig.entry = {
    main: [
      `webpack-dev-server/client?http://${host}:${port}/`,
      config.entry
    ]
  }

  webpackConfig.plugins = webpackConfig.plugins.filter(p => !(p instanceof HTMLPlugin))

  const compiler = webpack(webpackConfig)

  compiler.apply(new ProgressPlugin({
    colors: true,
    profile: true
  }))

  compiler.apply(new HTMLPlugin({
    template: path.resolve(__dirname, '../../index.html')
  }))

  const devServerConfig = Object.assign({}, {
    historyApiFallback: true,
    stats: {
      assets: true,
      colors: true,
      version: true,
      hash: true,
      timings: true,
      chunks: false,
      chunkModules: false
    },
    inline: true,
    
  }, serverConfig)


  const server = new WebpackDevServer(compiler, devServerConfig)

  return new Promise((resolve, reject) => {
    server.listen(port, `${host}`, (err, stats) => {
      if (err) {
        console.error(err.stack || err)
        if (err.details) {
          console.error(err.details)
          reject(err.details)
        }
      }
    })
  })
}
