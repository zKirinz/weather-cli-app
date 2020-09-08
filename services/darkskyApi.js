const request = require('request');
const config = require('../config');

//get weather of the given address by DarkSky API
const getWeather = (latitude, longitude, callback) => {
  request.get(
    {
      url: `${config.darksky.url}/b8164e69c9f7fbc654f20d2d6381d1fc/${latitude},${longitude}`,
      json: true,
    },
    (err, res, body) => {
      if (err && err.code === 'ENOTFOUND')
        return callback('Cannot connect to DarkSky API!');

      callback(null, {
        temperature: body.currently.temperature,
        summary: body.currently.summary,
        icon: body.currently.icon,
      });
    }
  );
};

module.exports = getWeather;
