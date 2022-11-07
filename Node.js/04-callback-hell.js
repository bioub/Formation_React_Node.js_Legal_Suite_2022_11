const fs = require("fs");

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
