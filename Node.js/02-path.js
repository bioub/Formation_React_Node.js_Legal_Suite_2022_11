const path = require('path');

const editorConfig = '.editorconfig';

// pour assembler les chemins
console.log(path.join('..', 'hello-react', editorConfig));
console.log(path.resolve('..', 'hello-react', editorConfig));

// attention surprise si votre CWD n'est pas dans le bon dossier
// astuce d'utiliser la constante __dirname
console.log(path.join(__dirname, '..', 'hello-react', editorConfig));
console.log(path.resolve(__dirname, '..', 'hello-react', editorConfig));

console.log(path.extname('image.png')); // .png
console.log(path.parse(path.resolve(__dirname, '..', 'hello-react', editorConfig)));
