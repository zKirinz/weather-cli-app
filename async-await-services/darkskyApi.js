const axios = require('axios');
const config = require('../config');

//get weather of the given address by DarkSky API
const getWeather = async (latitude, longitude) => {
  try {
    const res = await axios.get(
      `${config.darksky.url}/b8164e69c9f7fbc654f20d2d6381d1fc/${latitude},${longitude}`
    );
  } catch (err) {
    if (err && err.code === 'ENOTFOUND') {
      throw {
        message: 'Cannot connect to Darksky API!',
        statusCode: 500,
      };
    }
  }
  return axios
    .get(
      `${config.darksky.url}/b8164e69c9f7fbc654f20d2d6381d1fc/${latitude},${longitude}`
    )
    .then((res) => {
      return Promise.resolve({
        temperature: res.data.currently.temperature,
        summary: res.data.currently.summary,
        icon: res.data.currently.icon,
      });
    })
    .catch((err) => {
      if (err && err.code === 'ENOTFOUND')
        return Promise.reject({
          message: 'Cannot connect to DarkSky API!',
          statusCode: 500,
        });
      return Promise.reject(err);
    });
};

module.exports = getWeather;
