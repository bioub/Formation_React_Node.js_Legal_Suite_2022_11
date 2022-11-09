// setTimeout n'est basé sur l'API Promise
// setTimeout(() => {
//   console.log('1s');
// }, 1000);

// créons une fonction timeout qui fera un setTimeout
// sous forme de promesse
// timeout(1000).then(() => {
//   console.log('1s');
// });

function timeout(delayMs, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delayMs);
  });
}

function timeoutError(delayMs, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(value));
    }, delayMs);
  });
}

timeout(1000, "ABC").then((val) => {
  console.log("1s", val);
});

async function main() {
  const val = await timeout(1000, "ABC");
  console.log("1s", val);
}
main();

class UserService {
  findAll() {
    // return new Promise((resolve) => {
    //   resolve([{id: 1, name: 'Toto'}, {id: 2, name: 'Titi'}]);
    // });
    // on peut simplifier avec
    return Promise.resolve([
      { id: 1, name: "Toto" },
      { id: 2, name: "Titi" },
    ]);
  }
  findById(id) {
    // return new Promise((resolve, reject) => {
    //   reject(new Error('sample error'));
    // });
    // on peut simplifier avec
    Promise.reject(new Error("sample error"));
  }
}

// Pour démarrer plusieurs opérations async en même temps
// et controller le résultat on peut utiliser les méthodes

// Sans ces méthodes de controles, on est obligé d'attendre
(async function() {
  const val1 = await timeout(Math.random() * 1000, "Value 1");
  const val2 = await timeout(Math.random() * 1000, "Value 2");

  console.log(val1, val2);
})();

// Promise.all
// la promesse combinée est résolue lorsque l'ensemble est résolu
// use case : 2 requetes ou plus envoyées en même et on traite le résultat en
// une fois
(async function() {
  // le retour est dans le même ordre que la création
  // (pas dans l'ordre des résolutions)
  const [val1, val2] = await Promise.all([
    timeout(Math.random() * 1000, "Value 1 Promise.all"),
    timeout(Math.random() * 1000, "Value 2 Promise.all"),
  ]);

  console.log(val1, val2);
})();


// Promise.race
// la promesse combinée est résolue lorsque la première est résolue
// use case : 1 requete et un timeout, permet de limiter la requete
// si la requete est trop longue on s'arrete au timeout
(async function() {
  const val = await Promise.race([
    timeout(Math.random() * 1000, "Value 1 Promise.race"),
    timeout(Math.random() * 1000, "Value 2 Promise.race"),
  ]);

  console.log(val);
})();

// Promise.allSettled
// similaire à Promise.all, mais si une opération est en erreur
// on récupère quand même les résultats partiel
// use case : 2 requetes ou plus envoyées en même, si 1 en erreur
// on peut quand meme afficher un résultat partiel
(async function() {
  // le retour est dans le même ordre que la création
  // (pas dans l'ordre des résolutions)
  const val = await Promise.allSettled([
    timeout(Math.random() * 1000, "Value 1 Promise.allSettled"),
    timeout(Math.random() * 1000, "Value 2 Promise.allSettled"),
    timeoutError(Math.random() * 1000, "Error Promise.allSettled"),
  ]);

  console.log(val);
})();

// Promise.any
// similaire à Promise.race, mais si la première opératione est en erreur
// on attend la suivante
// on veut le premier résultat qui n'est pas en erreur
// s'il sont tous en erreur on obtient une erreur
// use case : on envoit plusieurs ping vers plusieurs serveurs
// pour connaitre le plus rapide
(async function() {
  const val = await Promise.any([
    timeout(Math.random() * 1000, "Value 1 Promise.any"),
    timeout(Math.random() * 1000, "Value 2 Promise.any"),
    timeoutError(Math.random() * 10, "Error Promise.any"),
  ]);

  console.log(val);
})();

// Attention les promesses ne fonctionne si le callback est appelé
// plusieurs fois, ex :
// setInterval
// buttonEl.addEventListener('click')
// traiter des requetes coté serveur
// WebSocket
// Worker (thread)

// 3 solutions
// -> streams
// -> Observable (lib RxJS -> Angular)
// -> Async iterator (Deno)
// for await (const conn of Deno.listen({ port: 80 })) {
//   handleHttp(conn);
// }
