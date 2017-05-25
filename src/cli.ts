#!/usr/bin/env node
import * as program from 'commander'
import * as path from 'path'
import * as chalk from 'chalk'
import { startServer } from './webpack/serve'
import { build } from './webpack/build'
const pjson = require('../package.json')

const getConfig = (config) => {
  let configPath = config.config || './dope'
  const parsed = path.parse(configPath) 
  configPath = path.join(parsed.dir, parsed.name)

  return configPath
}

const serve = (config) => {
  try {
    const configFile = require(path.join(process.cwd(), getConfig(config)))
    startServer(configFile)
  } catch (e) {
    console.log(chalk.red(e.message))
    console.log(chalk.red('dope config file not found. Make sure you have a dope.js'))
    process.exit(1)
  }
}

const buildDocs = (config) => {
  try {
    const configFile = require(path.join(process.cwd(), getConfig(config)))
    build(configFile)
  } catch (e) {
    console.log(chalk.red(e.message))
    console.log(chalk.red('dope config file not found. Make sure you have a dope.js'))
    process.exit(1)
  }
}


program.version(pjson.version)

program
  .command('serve')
  .option('-c, --config [configFilePath]', 'path to config file. Defaults to ./dope.js')
  .description('build and serve your Dope Docs')
  .action(serve)

program
  .command('build')
  .option('-c, --config [configFilePath]', 'path to config file. Defaults to ./dope.js')
  .description('build your Dope Docs')
  .action(buildDocs)

program
  .command('*')
  .action(buildDocs)

program.parse(process.argv)


