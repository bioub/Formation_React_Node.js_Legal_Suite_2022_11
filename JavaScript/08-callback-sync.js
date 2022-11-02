// function useCallback(cb) {
//   cb();
// }
// useCallback(() => {});

const names = ['Romain', 'Jean', 'Eric'];


function hello(name) {
  console.log(`Hello ${name.toUpperCase()}`);
}

// for (const n of names) {
//   if (n.length === 4) {
//     hello(n);
//   }
// }

// Programmation fonctionnelle
// où les fonctions remplacent les boucles et les if
names
  .filter((name) => name.length === 4)
  .forEach(hello);

// pile d'appels
// ^
// |                             [log  ][log  ]
// | for { [cb][cb][cb] }  for { [hello][hello] }                                                 [log      ]
// |[filter              ][forEach               ]
// +------------------------------------------------------> temps
//                               JEAN   ERIC
