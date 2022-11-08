const fs = require("fs/promises");

// try {
//   const buffer = fs.readFileSync(".editorconfig");
//   fs.writeFileSync(".editorconfig.copy", buffer);
//   console.log("Copy done");
// } catch (err) {
//   console.log(err);
// }

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
