const axios = require('axios');
const { converQuakeDateToDateString } = require('../utils/conversions');

const QuakeAPI = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02';

axios.get(QuakeAPI)
  .then(res => {
    const quake = res.data.features[0];
    const date = converQuakeDateToDateString(quakes.properties.time);

    const dataToSave = {
      magnitude: quake.properties.mag,
      location: quake.properties.place,
      date,
      time: quake.properties.time,
      id: quake.properties.id
    }
  })
  .catch(err => {
    console.log(err);
  });