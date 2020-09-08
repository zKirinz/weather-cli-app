const axios = require('axios');
const config = require('../config');

//get latitude and longitude of the given address by Google API
//callback(err, res)
const getLocation = (address) => {
  return axios
    .get(`${config.google.url}?key=${config.google.key}&address=${address}`)
    .then((res) => {
      if (res.data.status === 'ZERO_RESULTS') {
        return Promise.reject({
          message: 'Address Not Found!',
          statusCode: 404,
        });
      }
      if (res.data.status === 'INVALID_REQUEST') {
        return Promise.reject({
          message: 'Your address must have characters!',
          statusCode: 404,
        });
      }
      return Promise.resolve({
        formattedAddress: res.data.results[0].formatted_address,
        latitude: res.data.results[0].geometry.location.lat,
        longitude: res.data.results[0].geometry.location.lng,
      });
    })
    .catch((err) => {
      if (err && err.code === 'ENOTFOUND')
        return Promise.reject({
          message: 'Cannot connect to Google API!',
          statusCode: 500,
        });
      return Promise.reject(err);
    });
};

module.exports = getLocation;
