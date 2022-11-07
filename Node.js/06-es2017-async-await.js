const fs = require("fs/promises");

async function copyEditorConfig() {
  try {
    const buffer = await fs.readFile(".editorconfig");
    await fs.writeFile(".editorconfig.copy", buffer);
    console.log("Copy done");
  } catch (err) {
    console.log(err);
  }
}

copyEditorConfig();

// ^
// |
// |
// |[readFile] ⟳           [writeFile] ⟳         [log]
// +--------------------------------------------------------->
