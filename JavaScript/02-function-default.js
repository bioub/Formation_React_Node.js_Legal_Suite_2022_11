// tester si c vaut undefined
// function sum(a, b, c) {
//   if (c === undefined) {
//     c = 0;
//   }
//   return a + b + c;
// }

// tester avec un ||
// function sum(a, b, c) {
//   c = c || 0;
//   return a + b + c;
// }

// le || ne fonctionne si la valeur par défaut != false
// function multiply(a, b, c) {
//   c = c || 1;
//   return a * b * c;
// }
// console.log(multiply(2, 3, 0)); // ERREUR (2 * 3 * 1 au lieu de 2 * 3 * 0)

// au lieu de ||, il vaudrait mieux utiliser ??
// ES2020 Nullish Coalescing Operator
// function multiply(a, b, c) {
//   c = c ?? 1;
//   return a * b * c;
// }
// console.log(multiply(2, 3, 0)); // OK

// Default param
function sum(a, b, c = 0) {
  return a + b + c;
}

console.log(sum(1, 2));
