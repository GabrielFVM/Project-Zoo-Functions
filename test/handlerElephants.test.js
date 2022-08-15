const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se a função `handlerElephants` ao não receber nenhum parametro retorna undefined', () => {
    expect(handlerElephants(undefined)).toBeUndefined();
  });
  it('testa se a função quando recebe algo diferente de uma string retorna que é invalido', () => {
    expect(handlerElephants(4)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('teste se a função ao receber o argumento count deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('testa se o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names').includes('Jefferson')).toBeTruthy();
  });
  it('testa se o argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('testa se o argumento location deve retornar a string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('testa se o argumento popularity deve retornar um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('testa se o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability').includes('Monday')).toBeFalsy();
  });
  it('testa se passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('morango')).toBeNull();
  });
});
