const axios = require('axios');
const config = require('../config');

//get latitude and longitude of the given address by Google API
//callback(err, res)
const getLocation = async (address) => {
  try {
    const res = await axios.get(
      `${config.google.url}?key=${config.google.key}&address=${address}`
    );

    if (res.data.status === 'ZERO_RESULTS') {
      throw {
        message: 'Address Not Found!',
        statusCode: 404,
      };
    }

    if (res.data.status === 'INVALID_REQUEST') {
      throw {
        message: 'Your address must have characters!',
        statusCode: 404,
      };
    }

    return {
      formattedAddress: res.data.results[0].formatted_address,
      latitude: res.data.results[0].geometry.location.lat,
      longitude: res.data.results[0].geometry.location.lng,
    };
  } catch (err) {
    if (err.code && err.code === 'ENOTFOUND')
      console.log('Cannot connect to Google API!');
  }
};

module.exports = getLocation;
