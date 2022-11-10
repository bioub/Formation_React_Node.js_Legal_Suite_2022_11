const { range } = require("./range");

test('range returns an a array of number', () => {
  // toBe === (compare les références)
  // toStrictEqual vérifie que 2 objets ou ici 2 tableaux ont
  // les mêmes valeurs
  expect(range(4, 7)).toStrictEqual([4, 5, 6, 7]);
});

test('range throws if max > min', () => {
  expect(() => range(7, 4)).toThrow();
});
