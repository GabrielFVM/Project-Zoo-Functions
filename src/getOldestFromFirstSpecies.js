const data = require('../data/zoo_data');

const { employees, species } = data;
function getOldestFromFirstSpecies(id) {
  const worker = employees
    .find((employee) => employee.id === id);
  const specie = species
    .find((animal) => animal.id === worker.responsibleFor[0]);
  const ordenedAnimals = specie.residents
    .sort((a, b) => b.age - a.age);
  return ordenedAnimals.map((animal) => [`${animal.name}`, `${animal.sex}`, animal.age])[0];
}
console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = getOldestFromFirstSpecies;
