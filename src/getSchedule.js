const data = require('../data/zoo_data');

const { species, hours } = data;
const hoursEntries = Object.entries(hours);
const allAnimals = species.map((specie) => specie.name);
const allWeekDays = hoursEntries.map((entries) => entries[0]);
const allDaysAnimals = [...allAnimals, ...allWeekDays];
// função que retorna todos os horarios disponiveis caso a função não receba um parametro ou ele seja inválido
function getAnimalsByName(Name) {
  return species
    .find((specie) => specie.name === Name);
}
// array com o cronograma de um animal
function animalSchedule(animal) {
  const specie = getAnimalsByName(animal);
  return specie.availability;
}

function officeHour(weekDay) {
  if (weekDay === 'Monday') {
    return 'CLOSED';
  }
  const dayFound = hoursEntries
    .find((entrie) => entrie[0] === weekDay);
  return `Open from ${dayFound[1].open}am until ${dayFound[1].close}pm`;
}
function exhibition(weekDay) {
  if (weekDay === 'Monday') {
    return 'The zoo will be closed!';
  }
  return species
    .filter((specie) => specie.availability
      .includes(weekDay))
    .map((specie) => specie.name);
}

function daySchedule(weekDay) {
  return {
    [weekDay]: {
      officeHour: officeHour(weekDay),
      exhibition: exhibition(weekDay),
    },
  };
}

function allSchedules() {
  return {
    Tuesday: daySchedule('Tuesday').Tuesday,
    Wednesday: daySchedule('Wednesday').Wednesday,
    Thursday: daySchedule('Thursday').Thursday,
    Friday: daySchedule('Friday').Friday,
    Saturday: daySchedule('Saturday').Saturday,
    Sunday: daySchedule('Sunday').Sunday,
    Monday: daySchedule('Monday').Monday,
  };
}
function getSchedule(scheduleTarget) {
  if (!scheduleTarget || !allDaysAnimals.includes(scheduleTarget)) {
    return allSchedules();
  }
  if (allAnimals.includes(scheduleTarget)) {
    return animalSchedule(scheduleTarget);
  }
  return daySchedule(scheduleTarget);
}

module.exports = getSchedule;
