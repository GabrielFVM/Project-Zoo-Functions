const data = require('../data/zoo_data');

const { species } = data;

const findSpecie = (animal) => species
  .find((specie) => specie.name === animal);

function countBySpecie(animal) {
  return findSpecie(animal).residents.length;
}

function countSpeciesBySex(animal, sex) {
  return findSpecie(animal).residents
    .filter((resident) => resident.sex === sex).length;
}
// const objeto = {};
// const xableu = 'lion';
// objeto[xableu] = 4;
// console.log(objeto);
function getAllAnimals() {
  return species
    .reduce((acc, cv) => {
      const { name } = cv;
      acc[name] = countBySpecie(name);
      return acc;
    }, {});
}

function countAnimals(objeto) {
  if (!objeto) {
    return getAllAnimals();
  }
  if (!objeto.sex) {
    return countBySpecie(objeto.specie);
  }
  return countSpeciesBySex(objeto.specie, objeto.sex);
}

module.exports = countAnimals;
