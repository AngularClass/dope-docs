// #!/usr/bin/env node
import * as program from 'commander'
import * as pjson from '../package.json'
import * as path from 'path'
import * as chalk from 'chalk'
import { startServer } from './webpack/serve'

const serve = (config) => {
  let configPath = config.config || './uiguide'

  const parsed = path.parse(configPath) 
  configPath = path.join(parsed.dir, parsed.name)
  try {
    const configFile = require(configPath)
  } catch (e) {
    console.log(chalk.red('Config file not found'))
    process.exit(1)
  }
  
  startServer(config)
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


