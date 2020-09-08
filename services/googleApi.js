const request = require('request');
const config = require('../config');

//get latitude and longitude of the given address by Google API
//callback(err, res)
const getLocation = (address, callback) => {
  request.get(
    {
      url: `${config.google.url}?key=${config.google.key}&address=${address}`,
      json: true,
    },
    (err, res, body) => {
      if (err && err.code === 'ENOTFOUND')
        return callback('Cannot connect to Google API!');
      if (body.status === 'ZERO_RESULTS') return callback('Address Not Found!');
      if (body.status === 'INVALID_REQUEST')
        return callback('Your address must have characters!');

      callback(null, {
        formattedAddress: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng,
      });
    }
  );
};

module.exports = getLocation;
