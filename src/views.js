const inquirer = require('inquirer');
const {
  getAbilities,
  getTypes
} = require('./pokedex');
const {
  capitalize
} = require('./utils');

async function getUserInput() {
  const questions = [{
      type: 'number',
      name: 'number',
      message: 'Give me a Pokémon number [1-807]',
      validate: value => {
        if (value > 0 && value < 808) {
          return true;
        }
        return 'Please enter a valid number (from 1 to 807)';
      }
    },
    {
      type: 'checkbox',
      name: 'attributes',
      message: 'Select all attributes you wanna fetch',
      choices: [{
          name: 'name',
          checked: true
        },
        {
          name: 'weight'
        },
        {
          name: 'height'
        },
        {
          name: 'types'
        },
        {
          name: 'abilities'
        },
      ]
    }
  ];
  return await inquirer.prompt(questions);
}

function showData(data, attributes) {
  attributes.forEach(attribute => {
    if (attribute === 'types') {
      const types = getTypes(data).reduce((prev, curr) => prev + ', ' + curr);
      console.log(`Types: ${types}`);
    } else if (attribute === 'abilities') {
      const abilities = getAbilities(data).reduce((prev, curr) => prev + ', ' + curr);
      console.log(`Abilities: ${abilities}`);
    } else if (typeof data[attribute] === 'string') {
      console.log(`${capitalize(attribute)} of Pokémon is ${capitalize(data[attribute])}`);
    } else {
      console.log(`${capitalize(attribute)} of Pokémon is ${data[attribute]}`);
    }
  });
}

module.exports = {
  getUserInput,
  showData
};