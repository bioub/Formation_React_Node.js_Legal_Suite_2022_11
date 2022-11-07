const fs = require("fs/promises");

fs.readFile(".editorconfig")
  .then((buffer) => {
    // comme on retourne une promesse le .then et .catch
    // n'ont pas besoin d'être imbriqués
    return fs.writeFile(".editorconfig.copy", buffer);
  })
  .then(() => {
    console.log("Copy done");
  })
  .catch((err) => {
    console.log(err);
  });

// en version condensée
fs.readFile(".editorconfig")
  .then((buffer) => fs.writeFile(".editorconfig.copy", buffer))
  .then(() => console.log("Copy done"))
  .catch((err) => console.log(err));

// ^
// |
// |
// |[readFile] ⟳           [writeFile] ⟳         [log]
// +--------------------------------------------------------->
