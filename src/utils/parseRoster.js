const parseRoster = $ => {
  const roster = [];

  $('tbody tr').each((i, elem) => {
    const player = {};
    $(elem)
      .find('td')
      .each((i, elem) => {
        switch (i) {
          case 0:
            //position
            player['position'] = $(elem).text().trim();
            break;
          case 1:
            //name
            player['name'] = $(elem)
            .find('.player-name-col-lg')
            .text()
            .trim();
            break;
          case 9:
            // experience
            player['experience'] = $(elem).text().trim();
            break;
          case 10:
            //year drafted
            player['yearDrafted'] = $(elem).text().trim();
            break;
          case 11:
            //draft round
            player['roundDrafted'] = $(elem).text().trim();
            break;
          case 12:
            //draft pick
            player['overallDraftPick'] = $(elem).text().trim();
            break;
          default:
            break;
        }
      });
    roster.push(player);
  });
  return roster;
};

module.exports = parseRoster;
