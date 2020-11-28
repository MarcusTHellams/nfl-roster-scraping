const cheerio = require('cheerio');
const parseRoster = require('./parseRoster');
const jsonToCSV = require('./jsonToCSV');
const saveToFile = require('./saveToFile');
const { AXIOS_INSTANCE } = require('../consts/axiosInstance');

module.exports = async (name, url) => {
  const page = await AXIOS_INSTANCE.request(`/${url}`).then(resp => resp.data);
  const $ = cheerio.load(page);
  const roster = jsonToCSV(parseRoster($));
  saveToFile(roster, name);
};
