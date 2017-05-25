import { UIGuideBuildConfig } from '../interfaces'
import * as webpack from 'webpack'
import * as path from 'path'

const HTMLPlugin =  require('html-webpack-plugin')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const chalk = require('chalk')

export function build(config: UIGuideBuildConfig) {
  const webpackConfig = config.webpackConfig
  
  webpackConfig.entry = {
    main: config.entry
  }

  webpackConfig.output = {
    path: path.join(process.cwd(), 'dope-docs'),
    filename: 'dope-docs.js'
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

  compiler.run((err, stats) => {
    if (err) {
      console.error(chalk.red(err))
      process.exit(1)
      return
    }
    console.log(chalk.green(stats.toString()))
    process.exit(0)
  })
}
