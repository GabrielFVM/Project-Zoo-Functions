const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  const animalEncontrado = species
    .find((specie) => specie.name === animal);
  return animalEncontrado.residents
    .every((resident) => resident.age >= age);
}
module.exports = getAnimalsOlderThan;
