const yargs = require('yargs');
const getLocation = require('./async-await-services/googleApi');
const getWeather = require('./async-await-services/darkskyApi');

const argv = yargs
  .option({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Enter your address',
      string: true,
    },
  })
  .help()
  .alias('help', 'h').argv;

const address = argv.address;

getLocation(address);
