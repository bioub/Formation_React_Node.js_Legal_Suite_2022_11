function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const readline = require('readline');

const entierAlea = getRandomInt(0, 100);
const essais = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // terminal: true,
});

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {
    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    console.log('Vous avez saisi : ' + answer);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer()
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer()
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}

jouer();
