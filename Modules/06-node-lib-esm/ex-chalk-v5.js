// avec chalk v5 qui est exporté en ESM
// erreur si on est dans un module CommonJS ERR_REQUIRE_ESM
// const chalk = require('chalk');

// import('chalk').then((chalk) => {
//   console.log(chalk.default.blue('Hello'));
// });

(async () => {
  const { default: chalk } = await import('chalk')
  console.log(chalk.blue('Hello'));
})();
