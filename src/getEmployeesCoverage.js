const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allEmployeesIds = employees
  .map((employee) => employee.id);
//  encontrar objeto do funcionario a partir de nome, sobrenome e id
function getEmployee(objeto) {
  if (objeto.id) {
    return employees
      .find((employee) => employee.id === objeto.id);
  }
  if (objeto.name) {
    return employees
      .find(({ firstName, lastName }) => firstName === objeto.name || lastName === objeto.name);
  }
}
//  função full name com parametro id do funcionario
function fullName(id) {
  return employees
    .filter((employee) => employee.id === id)
    .map((Name) => `${Name.firstName} ${Name.lastName}`);
}
function findAnimalById(id) {
  return species.find((specie) => specie.id === id);
}
//  função especies com parametro id do funcionario
function especies(id) {
  const worker = employees.find((employee) => employee.id === id);
  return worker.responsibleFor.map((animalId) => findAnimalById(animalId).name);
}
//  função location com id do funcionario
function location(id) {
  const worker = employees.find((employee) => employee.id === id);
  return worker.responsibleFor.map((animalId) => findAnimalById(animalId).location);
}
//  função objeto do funcionario que utiliza as 3 funções anteriores
function workerObject(id) {
  return {
    id,
    fullName: fullName(id)[0],
    species: especies(id),
    locations: location(id),
  };
}
//  função array de objetos de funcionarios que retorna o objeto de todos os funcionarios(fazer um map no array de funcionarios)
function allWorkersObjects() {
  return allEmployeesIds
    .map((ids) => workerObject(ids));
}

function getEmployeesCoverage(objeto) {
  if (objeto === undefined) {
    return allWorkersObjects();
  }
  if (getEmployee(objeto) === undefined) {
    throw new Error('Informações inválidas');
  }
  return workerObject(getEmployee(objeto).id);
}
module.exports = getEmployeesCoverage;
