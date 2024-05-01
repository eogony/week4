const isCorrectSide = require ('./../src/isCorrectSide.js')

test('should correctly pick the die sides', () => {
  const die = new isCorrectSide(3,4);
  expect(die.side1).toEqual(3);
  expect(die.side2).toEqual(4);
})