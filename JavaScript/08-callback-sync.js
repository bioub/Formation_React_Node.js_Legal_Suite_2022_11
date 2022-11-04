// function useCallback(cb) {
//   cb();
// }
// useCallback(() => {});

const names = ['Romain', 'Jean', 'Eric'];


function hello(name) {
  console.log(`Hello ${name}`);
}

// for (const n of names) {
//   if (n.length === 4) {
//     hello(n);
//   }
// }

// Programmation fonctionnelle
// où les fonctions remplacent les boucles et les if
names
//.filter(function (name) { return name.length === 4 })
  .filter((name) => name.length === 4)
  .map((name) => name.toUpperCase())
  .forEach(hello);

// [
//   'Jean', -> (name) => name.toUpperCase() -> 'JEAN'
//   'Eric' -> (name) => name.toUpperCase() -> 'ERIC'
// ]
//

// pile d'appels
// ^
// |                             [log  ][log  ]
// | for { [cb][cb][cb] }  for { [hello][hello] }                                                 [log      ]
// |[filter              ][forEach               ]
// +------------------------------------------------------> temps
//                               JEAN   ERIC
