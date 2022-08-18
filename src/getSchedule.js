const data = require('../data/zoo_data');

const { species, hours } = data;
// função que retorna todos os horarios disponiveis caso a função não receba um parametro ou ele seja inválido
function allSchedules() {
}
function getAnimalsByName(Name) {
  return species
    .find((specie) => specie.name === Name);
}
// array com o cronograma de um animal
function animalSchedule(animal) {
  const specie = getAnimalsByName(animal);
  return specie.availability;
}
// função que retorna os horarios e animais disponiveis do dia
function schedulesOfTheDay(day) {
}

function officeHour() {
}

function exhibition() {
}

function scheduleBlock(weekDay) {
  const open = hours
    .find((hour) => hour);
}

function getSchedule(scheduleTarget) {
  // seu código aqui
}

module.exports = getSchedule;
