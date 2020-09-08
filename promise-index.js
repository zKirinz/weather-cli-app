const yargs = require('yargs');
const getLocation = require('./promise-services/googleApi');
const getWeather = require('./promise-services/darkskyApi');

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

getLocation(address)
  .then((res) => {
    const {latitude, longitude} = res;
    return getWeather(latitude, longitude);
  })
  .then((res) => {
    console.log('temperature: ', res.temperature);
    console.log('summary: ', res.summary);
    console.log('icon: ', res.icon);
  })
  .catch((err) => {
    console.log(err.message);
  });
