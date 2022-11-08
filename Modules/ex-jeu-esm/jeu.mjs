// ce fichier doit importer Random
// transformer le require de readline en import ESM
const readline = require('readline');
// utiliser chalk pour écrire les messages en couleurs
// chalk.green('Message'), chalk.blue('Message'), chalk.red('Message')

class Jeu {
  // constructor({ min = 0, max = 100 } = {}) {
  constructor(options = {}) {
    const min = options.min ?? 0;
    const max = options.max ?? 100;
    this.entierAlea = Random.getRandomInt(min, max);
    this.essais = [];
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      // terminal: true,
    });
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
    }

    this.rl.question('Quel est le nombre ? ', (answer) => {
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      console.log('Vous avez saisi : ' + answer);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer()
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer()
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}

// ce fichier doit exporter la classe Jeu
