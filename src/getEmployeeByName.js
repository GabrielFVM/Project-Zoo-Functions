const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees
    .find((employee) => employeeName === employee.firstName || employeeName === employee.lastName);
}
console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
