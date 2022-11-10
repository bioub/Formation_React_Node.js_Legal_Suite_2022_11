const { timeout } = require("./timeout");

// Problème ici on attend pas que le code async soit exécuté :
// test('timeout resolves in delay ms with value', () => {
//   timeout(1000, 'ABC').then((value) => {
//     expect(value).toBe('DEF'); // le test passe
//   });
// });

// avec done on passe en manuel (on appelle done pour marquer la fin du test)
test('timeout resolves in delay ms with value', (done) => {
  timeout(1000, 'ABC').then((value) => {
    expect(value).toBe('ABC');
    done();
  });
});

// on peut aussi utiliser les promesses
test('timeout resolves in delay ms with value', () => {
  return timeout(1000, 'ABC').then((value) => {
    expect(value).toBe('ABC');
  });
});

// peut se convertir en async function
test('timeout resolves in delay ms with value', async () => {
  const value = await timeout(1000, 'ABC');
  expect(value).toBe('ABC');
});

// on peut aussi controler le temps
test('timeout resolves in delay ms with value', async () => {
  jest.useFakeTimers(); // remplace le setTimeout global par un faux setTimeout

  const promise = timeout(1000, 'ABC');
  jest.runAllTimers()
  const value = await promise;
  expect(value).toBe('ABC');

  jest.useRealTimers(); // remet en place le vrai setTimeout
});
