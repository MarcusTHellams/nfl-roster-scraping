const fs = require('fs-extra');

const saveToFile = async (csv, teamName) => {
  const dir = `${process.cwd()}/output_data`;
  try {
    await fs.ensureDir(`${dir}`);
    await fs.writeFile(`${dir}/${teamName}.csv`, csv);
  } catch (err) {
    console.log(err);
  }
};

module.exports = saveToFile;
