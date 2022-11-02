// function sum(a, b) {
//   // pseudo variable (déclarée automatiquement à l'appel)
//   // arguments (qui contient les paramètres)
//   let result = a + b;

//   for (let i = 2; i < arguments.length; i++) {
//     const nb = arguments[i];
//     result += nb;
//   }

//   return result;
// }

// ES2015 REST Params
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}


console.log(sum(1, 2, 3, 4)); // 10
