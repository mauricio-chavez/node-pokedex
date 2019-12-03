const axios = require('axios');


async function getPokemonData(number) {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  const response = await axios.get(`${url}/${number}/`);
  return response.data;
}

function getAbilities(data) {
  const abilities = data.abilities;
  return abilities.map(value => value.ability.name);
}

function getTypes(data) {
  const types = data.types;
  return types.map(value => value.type.name);
}

module.exports = {
  getPokemonData,
  getAbilities,
  getTypes
};