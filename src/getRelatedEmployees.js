const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const worker = employees
    .find((employee) => (employee.id === id));
  return employees
    .some((manager) => manager.managers
      .includes(worker.id));
}
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees
    .filter((employee) => employee.managers
      .includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
}
console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
module.exports = { isManager, getRelatedEmployees };
