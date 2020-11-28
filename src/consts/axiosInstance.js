const axios = require('axios');

module.exports.AXIOS_INSTANCE = axios.create({
    baseURL: 'https://www.lineups.com/nfl/roster',
    method: 'GET'
})