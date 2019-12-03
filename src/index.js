const { getUserInput } = require('./views');
const { getPokemonData } = require('./pokedex');
const { showData } = require('./views');

async function main() {
  const { number, attributes } = await getUserInput();
  const data = await getPokemonData(number);
  showData(data, attributes);
}

main();