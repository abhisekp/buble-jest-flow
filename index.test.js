const transformer = require('./index');

test('buble jest remove flow types', () => {
  expect(transformer.process('(num: number): number => 0', { all: true })).toMatchSnapshot();
});
