// main est le point de l'app
// on va exécuter node main.js
// il doit importer Jeu

const Jeu = require("./jeu");

const game = new Jeu();
game.jouer();

