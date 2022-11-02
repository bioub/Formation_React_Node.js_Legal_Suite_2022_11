function externe(name) {
  return function interne() {
    return `Hello ${name}`;
  };
}

const helloRomain = externe('Romain');
console.log(helloRomain()); // Hello Romain
console.log(helloRomain()); // Hello Romain

const helloToto = externe('Toto');
console.log(helloToto()); // Hello Toto
console.log(helloToto()); // Hello Toto

// pile d'appels
// ^
// |
// |
// |[externe][interne/hello]
// +------------------------> temps

function createFunction(param) {
  return function interne() {
    console.log(param);
  };
}

for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i=0; i<3; i++) {
  setTimeout(createFunction(i), 1000);
}

for (let i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// ???
// A - ..1s.. 0 ..1s.. 1 ..1s.. 2
// B - ..1s.. 0 1 2
// C - ..1s.. 3 3 3

