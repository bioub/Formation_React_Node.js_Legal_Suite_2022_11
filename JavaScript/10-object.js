// les objets globaux du langage
console.log('typeof Math', typeof Math); // object
console.log('typeof JSON', typeof JSON); // object
console.log('typeof Atomics', typeof Atomics); // object

// les objets globaux du navigateur
console.log('typeof document', typeof document); // object
console.log('typeof window', typeof window); // object
console.log('typeof navigator', typeof navigator); // object
console.log('typeof location', typeof location); // object

// les objets globaux de Node.js
console.log('typeof process', typeof process); // object
console.log('typeof global', typeof global); // object

// l'objet est extensible
// ajouter une clé/valeur à Math par exemple
console.log('Math.sum', Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log('Math.sum(1, 2)', Math.sum(1, 2)); // 3

// modifier
const originalRandom = Math.random;
Math.random = () => 0.5;
console.log('Math.random()', Math.random()); // 0.5

// supprimer
delete Math.random;
console.log('Math.random', Math.random); // undefined
Math.random = originalRandom;

// 2 façons de créer un objet

// object literal
// -> pour les objets qui ne sont créé qu'une fois
const MyMath = {
  sum: (a, b) => a + b,
};

// -> pour les objets créé plusieurs fois SANS METHODES
const coords1 = {
  x: 1,
  y: 2,
};

const coords2 = {
  x: 3,
  y: 4,
};

// constructor + prototype (-> class)
// -> pour les objets créé plusieurs fois AVEC METHODES
// function Contact() {
//   this.name = 'Romain'; // extension
// }

// Contact.prototype.hello = function() {
//   console.log(`Hello my name is ${this.name}`);
// };

class Contact {
  constructor() {
    this.name = 'Romain'; // extension
  }
  hello() {
    console.log(`Hello my name is ${this.name}`);
  }
}

const romain = new Contact();
console.log('typeof romain', typeof romain); // object
console.log(romain.name);

// delete romain.name

romain.hello(); // Hello my name is Romain
