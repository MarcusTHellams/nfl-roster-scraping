const {TEAMS} = require('../consts/teams');
const fetchFoster = require('./fetchRoster');


const outputRosters = ()=>{
    TEAMS.forEach(team=>{
        fetchFoster(team.name, team.url)
    })
};

module.exports = outputRosters;