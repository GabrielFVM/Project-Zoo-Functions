const data = require('../data/zoo_data');

const { prices } = data;
const { adult, child, senior } = prices;
function countEntrants(entrants) {
  const childFilter = entrants
    .filter((entrant) => entrant.age < 18).length;
  const adultFilter = entrants
    .filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const seniorFilter = entrants
    .filter((entrant) => entrant.age >= 50).length;
  return {
    child: childFilter,
    adult: adultFilter,
    senior: seniorFilter,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const entries = countEntrants(entrants);
  return entries.child * child + entries.adult * adult + entries.senior * senior;
}

module.exports = { calculateEntry, countEntrants };
