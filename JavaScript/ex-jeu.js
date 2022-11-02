const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {

    console.log('Vous avez saisi : ' + answer);

    // pour rejouer
    jouer();

    // en fin de partie (quand le nombre a été trouvé)
    // rl.close();
  });
}

jouer();
