const fs = require('fs');
const fsp = require('fs/promises');

// synchrone
const buffer = fs.readFileSync('.editorconfig');
console.log(buffer.toString('utf-8'));

// ^
// |
// |
// |[readFileSync                      ][log]
// +------------------------------------------->

// asynchrone basée sur des callbacks
fs.readFile('.editorconfig', (err, buffer) => {
  console.log(buffer.toString('utf-8'));
});

// asynchrone basée sur des promesses
fsp.readFile('.editorconfig').then((buffer) => {
  console.log(buffer.toString('utf-8'));
});

// ^
// |
// |
// |[readFile] ⟳                          [log]
// +------------------------------------------->
