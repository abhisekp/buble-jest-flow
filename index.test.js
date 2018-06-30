const transformer = require('.');

test('buble jest remove flow types', () => {
  expect(transformer.process('(num: number): number => 0', { all: true })).toMatchSnapshot();
});
