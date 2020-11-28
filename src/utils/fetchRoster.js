const axios = require('axios');
const cheerio = require('cheerio');
const parseRoster = require('./parseRoster');

module.exports = async url => {
  const page = await axios.get(url).then(resp => resp.data);
  const $ = cheerio.load(page);
  const roster = parseRoster($);
  return roster;
};
