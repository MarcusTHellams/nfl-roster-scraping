const { Parser } = require('json2csv');

const fields = [
  {
    label: 'Position',
    value: 'position',
  },
  {
    label: 'Name',
    value: 'name',
  },
  {
    label: 'Experience',
    value: 'experience',
  },
  {
    label: 'Year Drafted',
    value: 'yearDrafted',
  },
  {
    label: 'Round Drafted',
    value: 'roundDrafted',
  },
  {
    label: 'Overall DraftPick',
    value: 'overallDraftPick',
  },
];

const jsonToCSV = roster => {
  const json2csvParser = new Parser({ fields });
  const csv = json2csvParser.parse(roster);
  return csv;
};

module.exports = jsonToCSV;
