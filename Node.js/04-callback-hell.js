const fs = require("fs");

try {
  const buffer = fs.readFileSync(".editorconfig");
  fs.writeFileSync(".editorconfig.copy", buffer);
  console.log("Copy done");
} catch (err) {
  console.log(err);
}

// si on enchaine les opérations async et qu'on gère
// les erreurs -> callback hell / pyramid of doom
fs.readFile(".editorconfig", (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(".editorconfig.copy", buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Copy done");
      }
    });
  }
});

// ^
// |
// |
// |[readFile] ⟳           [writeFile] ⟳         [log]
// +--------------------------------------------------------->
