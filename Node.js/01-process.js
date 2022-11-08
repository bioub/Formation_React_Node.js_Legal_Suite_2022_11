// Variable d'environnements
console.log(process.env.PATH.split(':').find((path) => path.includes('node')));

if (process.env.NODE_ENV === 'production') {
  // code de production uniquement
  console.log('production');
}

// arguments et options de la commande :
// node 01-process.js --debug true
console.log(process.argv);

console.log(process.cwd()); // Current Working Dir ->
// où vous avez exécuter la commande
// un chemin relatif dépend du CWD

console.log(process.platform); // Windows (win32), Mac (darwin) ou Linux (linux)
