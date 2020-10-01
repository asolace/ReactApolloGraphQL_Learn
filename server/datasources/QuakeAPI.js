const { RESTDataSource } = require('apollo-datasource-rest');
const { converQuakeDateToDateString } = require('../../utils/conversions');

class QuakeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://earthquake.usgs.gov/fdsnws/event/1/';
  }

  async getAllQuakes() {
    const quakeQuery = 'query?format=geojson&starttime=2014-01-01&endtime=2014-01-02'
    const response = await this.get(quakeQuery);

    return Array.isArray(response.features)
      ? response.features.map(quake => this.quakeReducer(quake))
      : [];
  }

  quakeReducer(quake) {
    const date = converQuakeDateToDateString(quake.properties.time);
    
    return {
      magnitude: quake.properties.mag,
      location: quake.properties.place,
      date,
      cursor: quake.properties.time,
      id: quake.id
    };
  }
}
  
module.exports = QuakeAPI;
