const { hours } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

const closed = 'The zoo is closed';
const open = 'The zoo is open';
describe('Testes da função getOpeningHours', () => {
  it('testa se os argumentos Monday e 09:00-AM devem retornar a string `The zoo is closed` (Já que o Zoo está sempre fechado na segunda)', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closed);
  });
  it('testa se os argumentos Tuesday e 09:00-AM devem retornar a string `The zoo is open`)', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(open);
  });
  it('testa se os argumentos Wednesday e 09:00-PM deve retornar a string `The zoo is closed`)', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(closed);
  });
  it('testa se os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: `The day must be valid. Example: Monday`', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('testa se os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: `The abbreviation must be \'AM\' or \'PM\'`', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('testa se os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: `The hour should represent a number`', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('testa se os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: `The minutes should represent a number`', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  it('testa se os argumentos Monday e 13:00-AM deve lançar uma exceção com a mensagem: `The hour must be between 0 and 12`', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('testa se os argumentos Tuesday e 09:60-AM deve lançar uma exceção com a mensagem: `The minutes must be between 0 and 59`', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Se não for passado nenhum argumento a função deve retornar as datas e horarios', () => {
    expect(getOpeningHours()).toBe(hours);
  });
});
