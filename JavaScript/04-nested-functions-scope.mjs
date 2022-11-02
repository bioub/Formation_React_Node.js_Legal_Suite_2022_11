function parentFunc() {
  const a = 1;

  function nestedFunc() {
    const b = 4; // parentFunc can't use this
    return a + b;
  }
  return nestedFunc(); // 5
}

console.log(parentFunc()); // 5

// portée globale
globalThis.globalVar = 'globalVar';

// portée de module (portée du fichier)
const moduleVar = 'moduleVar';

function externe() {
  const closureVar = 'closureVar';

  function interne() {
    const localVar = 'localVar';

    if (true) {
      const blockVar = 'blockVar';
      console.log(blockVar);
      console.log(localVar);
      console.log(closureVar);
      console.log(moduleVar);
      console.log(globalVar);
    }
  }

  interne();
}

externe();

// pile d'appels
// ^
// |
// |  [interne]
// |[externe  ]
// +------------------------> temps
