const sum = require ('./../src/dieTotal.js')

test('adds 3 + 4 to equal 7', () => {
  expect(sum(3,4)).toEqual(7)
})