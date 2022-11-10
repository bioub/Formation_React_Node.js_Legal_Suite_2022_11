const { pileOuFace } = require("./pileOuFace")

test('pileOuFace returns pile', () => {
  const originalRandom = Math.random;

  Math.random = () => 0.75;
  expect(pileOuFace()).toBe('pile');
  Math.random = originalRandom;
})

test('pileOuFace returns face', () => {
  const originalRandom = Math.random;

  Math.random = () => 0.25;
  expect(pileOuFace()).toBe('face');
  Math.random = originalRandom;
})
