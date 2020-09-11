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

const main = async () => {
  const location = await getLocation(address);
  if (location) {
    const weather = await getWeather(location.latitude, location.longitude);
    console.log('temperature: ', weather.temperature);
    console.log('summary: ', weather.summary);
    console.log('icon: ', weather.temperature);
  }
};

main();
