const axios = require('axios');
const cheerio = require('cheerio');
const parseRoster = require('./parseRoster');
const jsonToCSV = require('./jsonToCSV');

module.exports = async url => {
  const page = await axios.get(url).then(resp => resp.data);
  const $ = cheerio.load(page);
  const roster = jsonToCSV(parseRoster($));
  return roster;
};
