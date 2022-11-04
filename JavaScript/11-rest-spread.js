// REST Params ES2015
// Conversion syntaxique
// Une liste de valeurs (ici 3, 4)
// vers
// Un tableau (ici [3, 4])
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4)); // 10

// SPREAD operator ES2015
// Conversion syntaxique
// Un tableau (ici [3, 4])
// vers
// Une liste de valeurs (ici 3, 4)

function multiply(a, b) {
  return a * b;
}

const nbs = [3, 4];
console.log(multiply(...nbs)); // 10

const cloneNbs = [...nbs];

// Mettre à jour un tableau de façon immuable
// en créant un nouveau tableau
const newNbs = [...nbs, 5];

// Destructurer un tableau
// const trois = newNbs[0];
// const quatre = newNbs[1];
// const cinq = newNbs[2];

//    [3    , 4     , 5   ]
const [trois,       , cinq] = newNbs;

//    [3    , 4             ]
const [three, four, five = 5] = nbs

//    [3    , 4     , 5     ]
const [tres, ...quatroCinquo] = newNbs;

const coords = { x: 1, y: 2 };


//       { x: 1   , y: 2    }
// const { x: valX, y: valY } = coords;
// console.log(valX, valY);

// const { x: x, y: y, z: z = 0 } = coords;
const { x, y, z = 0 } = coords;

const cloneCoords = { ...coords } // SPREAD Object ES2018
const { z: valZ, ...coords2d } = coords; // REST Object ES2018
