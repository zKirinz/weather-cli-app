const yargs = require('yargs');
const getLocation = require('./services/googleApi');
const getWeather = require('./services/darkskyApi');

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

getLocation(address, (err, res) => {
  if (err) return console.log(err);

  getWeather(res.latitude, res.longitude, (err, res) => {
    if (err) return console.log(err);

    console.log('temperature: ', res.temperature);
    console.log('summary: ', res.summary);
    console.log('icon: ', res.temperature);
  });
});


