#!/usr/bin/env node
import * as program from 'commander'
import * as path from 'path'
import * as chalk from 'chalk'
import { startServer } from './webpack/serve'
const pjson = require('../package.json')

const serve = (config) => {
  let configPath = config.config || './uiguide'

  const parsed = path.parse(configPath) 
  configPath = path.join(parsed.dir, parsed.name)
  try {
    const configFile = require(path.join(process.cwd(), configPath))
    startServer(configFile)
  } catch (e) {
    console.log(chalk.red(e.message))
    console.log(chalk.red('Config file not found'))
    process.exit(1)
  }
}


program.version(pjson.version)

program
  .command('serve')
  .option('-c, --config [configFilePath]', 'path to config file. Defaults to ./uiguide')
  .description('build and serve your UI Guide')
  .action(serve)

program
  .command('*')
  .action(serve)

program.parse(process.argv)


