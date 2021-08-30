const fs = require('fs').promises;

const getSimpsonsFile = async () => {
  const simpsonsFile = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsFileContent = await JSON.parse(simpsonsFile);

  return simpsonsFileContent;
};

const setNewFile = (newSimpsons) => fs
  .writeFile('./simpsons.json', JSON.stringify(newSimpsons));

module.exports = { getSimpsonsFile, setNewFile };
